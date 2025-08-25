import { useHandleError } from '@/common/hooks/useHandleError';
import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const patchCancelPick = async (id: number) => {
  const response = await client.patch(`/api/v1/appointment/${id}/cancel`);
  return response.data;
};
export const usePatchCancelPick = () => {
  const queryClient = useQueryClient();
  const handleError = useHandleError();

  return useMutation({
    mutationFn: patchCancelPick,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PICK_DETAIL] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ITEM_STATUS] });
    },
    onError: error => handleError(error, 'PICK 취소에 실패했어요'),
  });
};
