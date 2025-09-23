import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteUser = async () => {
  const response = await client.delete('/api/v1/user');
  return response.data;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.IS_LOGIN] });
    },
  });
};
