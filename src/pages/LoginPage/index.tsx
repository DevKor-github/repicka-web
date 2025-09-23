import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import useGetIsLogin from '@/common/apis/useGetIsLogin';
import GoogleLogo from '@/libs/assets/GoogleLogo';
import KakaoLogo from '@/libs/assets/KakaoLogo';
import AppleLogo from '@/libs/assets/AppleLogo';

const LoginPage = () => {
  const navigate = useNavigate();
  const { data: isLogin, isLoading } = useGetIsLogin();
  const redirectUrl = import.meta.env.VITE_REDIRECT_URL || undefined;

  useEffect(() => {
    if (isLogin) {
      navigate(-1);
    }
  }, [isLogin, navigate]);

  if (isLoading || isLogin) return null;

  return (
    <SafeArea>
      <div className={s.Container}>
        <div className={s.Header}>
          <button className="mgc_left_line" onClick={() => navigate(-1)} aria-label="뒤로가기" />
        </div>
        <p className={s.Label}>SNS 계정으로 로그인하기</p>
        <div className={s.ButtonContainer}>
          <a
            className={s.LoginButton({ src: 'apple' })}
            href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/apple${redirectUrl ? `?redirectURI=${redirectUrl}` : ''}`}
          >
            <AppleLogo />
            Apple로 로그인
          </a>
          <a
            className={s.LoginButton({ src: 'google' })}
            href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google${redirectUrl ? `?redirectURI=${redirectUrl}` : ''}`}
          >
            <GoogleLogo />
            Google로 로그인
          </a>
          <a
            className={s.LoginButton({ src: 'kakao' })}
            href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao${redirectUrl ? `?redirectURI=${redirectUrl}` : ''}`}
          >
            <KakaoLogo />
            카카오톡으로 로그인
          </a>
        </div>
      </div>
    </SafeArea>
  );
};
export default LoginPage;
