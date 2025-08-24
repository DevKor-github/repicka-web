import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const postLogout = async () => {
  const response = await client.post(`/api/v1/logout`);
  return response.data;
};

export const usePostLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      navigate('/');
    },
  });
};
