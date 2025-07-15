import useGetIsLogin from '@/common/hooks/apis/useGetIsLogin';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

/**
 * 로그인 해야만 들어갈 수 있는 페이지를 감싸주는 컴포넌트
 */
const AuthGuard = () => {
  const navigate = useNavigate();
  const { data: isLogin, isLoading, isSuccess } = useGetIsLogin();

  useEffect(() => {
    if (isSuccess && !isLogin) {
      navigate('/login', { replace: true });
    }
  }, [isLogin, isSuccess, navigate]);

  if (isLoading) return null;

  return <Outlet />;
};
export default AuthGuard;
