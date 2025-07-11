import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';

const LoginPage = () => {
  return (
    <SafeArea>
      <div className={s.Container}>
        <h1>임시 로그인 페이지</h1>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}>카카오 로그인</a>
        <a href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}>구글 로그인</a>
      </div>
    </SafeArea>
  );
};
export default LoginPage;
