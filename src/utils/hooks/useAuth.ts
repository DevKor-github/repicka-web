import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // TODO: 따로 훅으로 분리
    // TODO: Store 같은 거 써서 토큰 관리
    // TODO: Axios 인터셉터 써서 토큰 헤더에 넣고 갱신해주는 로직 추가
    // TODO: 토큰을 쿠키로 받아와야 할 거 같은데 말이죵 흠
    const params = new URLSearchParams(window.location.search);
    const refreshToken = params.get('refresh-token');
    const accessToken = params.get('access-token');
    if (refreshToken && accessToken) {
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      params.delete('refresh-token');
      params.delete('access-token');
      const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return { isLoggedIn };
};
export default useAuth;
