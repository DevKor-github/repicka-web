import { useState } from 'react';
import type { ActivityComponentType } from '@stackflow/react';
import Btn from '@/common/components/Button';
import { useFlow } from '@/libs/routes/stack';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
import * as s from './style.css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';
import Chip from '@/common/components/Chip';
import SelectButton from '@/common/components/SelectButton';
import TestAPIButton from '@/common/components/TestAPIButton';
import useGetIsLogin from '@/common/hooks/apis/useGetIsLogin';


const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();
  const { data: isLogin } = useGetIsLogin();
  const [active, setActive] = useState(false);

  return (
    <AppScreenWithSafeArea>
      <div className={s.Wrapper}>
        <h1 className={s.Title}>리피카 짱</h1>
        <h1 className={s.Title}>음 재밋다</h1>
        {isLogin ? (
          <TestAPIButton />
        ) : (
          <div className={s.LoginBtn} style={{margin: '1rem'}}>
            <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
            <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
            <i className={s.Container}>백엔드에몽 로그인 고쳐줘</i>
            <button onClick={() => push('PostPage', {})}>이동</button>
          </div>
        )}
      </div>
      <Chip color="gray">축구</Chip>
      <SelectButton active={active} onClick={() => setActive(!active)}>
        종목
      </SelectButton>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Btn color = 'softgray' style = {{width : '5.875rem'}}>ㅇ 채팅</Btn>
        <Btn color='main' style = {{width: '15.8125rem'}} >대여일자선택</Btn>
      </div>
      <div style={{display: 'flex', flexDirection:'column', marginTop: '1rem', gap: '0.5rem'}}>
        <Btn color='gray'>안녕하세요</Btn>
        <Btn color='deemedgray'>반가워요...</Btn>
      </div>
    </AppScreenWithSafeArea>
  );
};

export default HomePage;
