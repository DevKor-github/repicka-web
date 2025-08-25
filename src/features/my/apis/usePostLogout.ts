import { useToast } from '@/common/hooks/useToast';
import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

const postLogout = async () => {
  const response = await client.post('/api/v1/logout');
  return response.data;
};

export const usePostLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.IS_LOGIN] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
    },
  });
};
