import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteItem = async (itemId: number) => {
  const response = await client.delete(`/api/v1/item/${itemId}`);
  return response.data;
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ITEM_LIST] });
    },
  });
};
