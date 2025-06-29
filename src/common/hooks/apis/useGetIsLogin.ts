import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getIsLogin = async () => {
  const response = await client.get('/api/test/is-login');
  return response.data;
};

const useGetIsLogin = () => {
  return useQuery({
    queryKey: ['isLogin'],
    queryFn: getIsLogin,
    enabled: false,
  });
};

export default useGetIsLogin;
