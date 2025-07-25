import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getIsLogin = async () => {
  try {
    const response = await client.get('/api/test/is-login');
    if (response.status === 200) {
      if (response.data.data) return true;
    }
    return false;
  } catch {
    return false;
  }
};

const useGetIsLogin = () => {
  return useQuery({
    queryKey: ['isLogin'],
    queryFn: getIsLogin,
    staleTime: 0, // 매번 확인
  });
};

export default useGetIsLogin;
