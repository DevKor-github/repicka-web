// TODO: 상태관리

import type { UserInterface } from '@/libs/types/user';
import * as s from './style.css';
import MyEditHeader from '@/features/myEdit/components/MyEditHeader';
import { useLocation } from 'react-router';
import InputField from '@/features/post/components/InputField';
import { useState } from 'react';

type MyEditState = { data: UserInterface };

const MyEditPage = () => {
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;
  const [nickname, setNickname] = useState(data.nickname);

  return (
    <>
      <MyEditHeader />
      <div className={s.Wrapper}>
        <img className={s.ProfileImage} src={data.profileImageUrl} alt={data.nickname} />
        <div className={s.Content}>
          <h1>닉네임</h1>
          <InputField setValue={setNickname} value={nickname} />
        </div>
      </div>
    </>
  );
};

export default MyEditPage;
