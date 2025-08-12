import * as s from './style.css';
import MyEditHeader from '@/features/myEdit/components/MyEditHeader';
import { useLocation, useNavigate } from 'react-router';
import InputField from '@/features/post/components/InputField';
import Btn from '@/common/components/Button';
import { useEffect, useRef, useState } from 'react';
import { usePutUser } from '@/features/myEdit/apis/usePutUser';
import type { UserInterface } from '@/features/my/types';
import { cx } from '@styled-system/css';

type MyEditState = { data: UserInterface };

// TODO: 사진 올리는 로직 수정
const MyEditPage = () => {
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;
  const [nickname, setNickname] = useState(data.nickname);
  const [isEdited, setIsEdited] = useState<'main' | 'disabled'>('disabled');

  const { mutate: updateUser } = usePutUser();
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClickCamera = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('선택한 파일:', file);
    }
  };

  // TODO: 수정 가능한 정보 추가하기
  useEffect(() => {
    if (nickname !== data.nickname && nickname.length >= 2) {
      setIsEdited('main');
    } else {
      setIsEdited('disabled');
    }
  }, [nickname, data.nickname]);

  const onSave = () => {
    updateUser({ nickname }, { onSuccess: () => navigate(-1) });
  };

  return (
    <div className={s.EntireLayout}>
      <MyEditHeader />
      <div className={s.Wrapper}>
        <div className={s.EditImage} onClick={onClickCamera}>
          <img className={s.ProfileImage} src={data.profileImageUrl} alt={data.nickname} />
          <div className={cx('mgc_camera_2_fill', s.SelectPhoto)} />
        </div>
        <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={onFileChange} />
        <div className={s.Content}>
          <h1>닉네임</h1>
          <InputField setValue={setNickname} value={nickname} maxLength={10} isEdited={isEdited} />
        </div>
      </div>
      <Btn mode={isEdited} onClick={onSave}>
        저장하기
      </Btn>
    </div>
  );
};

export default MyEditPage;
