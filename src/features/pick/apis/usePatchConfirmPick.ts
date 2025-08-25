import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const patchConfirmPick = async (id: number) => {
  const response = await client.patch(`/api/v1/appointment/${id}/confirm`);
  return response.data;
};

export const usePatchConfirmPick = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchConfirmPick,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PICK_DETAIL] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ITEM_STATUS] });
    },
  });
};
