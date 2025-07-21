import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postLike = async (itemId: number) => {
  const response = await client.post(`/api/v1/like/${itemId}`);
  return response.data;
};

export const usePostLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['item-detail'] });
      queryClient.invalidateQueries({ queryKey: ['item-list'] });
    },
  });
};
