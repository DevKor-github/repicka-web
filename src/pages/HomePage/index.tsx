import { useFlow } from '@/libs/routes/stack';
import type { ActivityComponentType } from '@stackflow/react';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
import * as s from './style.css';

import AppScreenWithSafeArea from '@/common/components/AppScreenWithSafeArea';
import TestAPIButton from '@/common/components/TestAPIButton';

const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();
  return (
    <AppScreenWithSafeArea>
      <h1 className={s.Title}>리피카 짱</h1>
      <h1 className={s.Title}>음 재밋다</h1>
      <div className={s.LoginBtn}>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
        <i className={s.Container}>백엔드에몽 로그인 고쳐줘</i>
        <TestAPIButton />
        <button onClick={() => push('PostPage', {})}>이동</button>
      </div>
    </AppScreenWithSafeArea>
  );
};

export default HomePage;
