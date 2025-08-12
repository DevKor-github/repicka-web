import * as s from './style.css';
import MyEditHeader from '@/features/myEdit/components/MyEditHeader';
import { useNavigate, useLocation } from 'react-router';
import Btn from '@/common/components/Button';
import { usePutUser } from '@/features/myEdit/apis/usePutUser';
import MyEditContent from '@/features/myEdit/components/MyEditContent';
import { useState, useEffect } from 'react';
import type { UserInterface } from '@/libs/types/user';

type MyEditState = { data: UserInterface };

const MyEditPage = () => {
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;

  const [nickname, setNickname] = useState(data.nickname);
  const [isEdited, setIsEdited] = useState<'main' | 'disabled'>('disabled');

  const { mutate: updateUser } = usePutUser();
  const navigate = useNavigate();

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
      <MyEditContent
        nickname={nickname}
        setNickname={setNickname}
        isEdited={isEdited}
        profileImageUrl={data.profileImageUrl}
      />
      <div className={s.Footer}>
        <Btn mode={isEdited} onClick={onSave}>
          저장하기
        </Btn>
      </div>
    </div>
  );
};

export default MyEditPage;
