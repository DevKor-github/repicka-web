import { useHandleError } from '@/common/hooks/useHandleError';
import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import type { TradeMethods } from '@/libs/types/item';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PatchAppointmentRequest {
  appointmentId: number;
  rentalLocation: string;
  returnLocation?: string;
  rentalDate: string;
  returnDate?: string;
  price: number;
  deposit?: number;
  tradeMethod: TradeMethods;
}

// TODO: url 수정!!!!
const patchAppointment = async (data: PatchAppointmentRequest) => {
  const response = await client.patch('/api/v1/appointment', data);
  return response.data.data;
};

export const usePatchAppointment = () => {
  const queryClient = useQueryClient();
  const handleError = useHandleError();

  return useMutation({
    mutationFn: patchAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PICK_DETAIL] });
    },
    onError: handleError,
  });
};
