import { useNavigate } from 'react-router';

// CSS 사용하는 컴포넌트에서는 이런 식으로 불러오기
import * as s from './style.css';

import Btn from '@/common/components/Button';
import TestAPIButton from '@/common/components/TestAPIButton';
import useGetIsLogin from '@/common/hooks/apis/useGetIsLogin';
import SafeArea from '@/common/components/SafeArea';

const HomePage = () => {
  const navigate = useNavigate();
  const { data: isLogin } = useGetIsLogin();

  return (
    <SafeArea>
      <div className={s.Wrapper}>
        <h1 className={s.Title}>리피카 짱</h1>
        <h1 className={s.Title}>음 재밋다</h1>
        {isLogin ? (
          <TestAPIButton />
        ) : (
          <div className={s.LoginBtn} style={{ margin: '1rem' }}>
            <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오톡 로그인</a>
            <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
            <i className={s.Container}>백엔드에몽 로그인 고쳐줘</i>
          </div>
        )}
      </div>
      <Btn onClick={() => navigate('/post')} color="main">
        게시글 작성...
      </Btn>
    </SafeArea>
  );
};

export default HomePage;
