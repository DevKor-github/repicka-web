import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
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
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ITEM_DETAIL] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ITEM_LIST] });
    },
  });
};
