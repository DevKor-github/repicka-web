import { useFlow } from '@/libs/routes/stack';
import type { ActivityComponentType } from '@stackflow/react';
import Btn from '@/common/components/Button';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
import * as s from './style.css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';


const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();
  return (
    <AppScreenWithSafeArea>
      <h1 className={s.Title}>리피카 짱</h1>
      <h1 className={s.Title}>음 재밋다</h1>
      <div className={s.LoginBtn} style={{margin: '1rem'}}>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
        <i className={s.Container}>백엔드에몽 로그인 고쳐줘</i>
        <button onClick={() => push('PostPage', {})}>이동</button>
      </div>
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
