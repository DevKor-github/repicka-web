import InputField from '@/features/post/components/InputField';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useRef } from 'react';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  isEdited: 'main' | 'disabled';
  profileImageUrl: string;
}

const MyEditContent = ({ nickname, setNickname, isEdited, profileImageUrl }: Props) => {
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

  return (
    <div className={s.Wrapper}>
      <div className={s.EditImage} onClick={onClickCamera}>
        <img className={s.ProfileImage} src={profileImageUrl} alt={nickname} />
        <div className={cx('mgc_camera_2_fill', s.SelectPhoto)} />
      </div>
      <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={onFileChange} />
      <div className={s.Content}>
        <h1>닉네임</h1>
        <InputField setValue={setNickname} value={nickname} maxLength={10} isEdited={isEdited} />
      </div>
    </div>
  );
};

export default MyEditContent;
