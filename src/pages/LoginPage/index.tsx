import GoogleLogo from '@/libs/assets/GoogleLogo';
import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import KakaoLogo from '@/libs/assets/KakaoLogo';

const LoginPage = () => {
  return (
    <SafeArea>
      <div className={s.Container}>
        <p className={s.Label}>SNS 계정으로 로그인하기</p>
        <div className={s.ButtonContainer}>
          {/* TODO: 애플 로그인 추가 */}
          <a
            className={s.LoginButton({ src: 'google' })}
            href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}
          >
            <GoogleLogo />
            Google로 로그인
          </a>
          <a
            className={s.LoginButton({ src: 'kakao' })}
            href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}
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
