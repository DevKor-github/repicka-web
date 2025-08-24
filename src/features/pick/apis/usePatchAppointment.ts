import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PatchAppointmentRequest {
  appointmentId: number;
  rentalLocation: string;
  returnLocation?: string;
  rentalDate: string;
  returnDate?: string;
  price: number;
  deposit?: number;
}

// TODO: url 수정!!!!
const patchAppointment = async (data: PatchAppointmentRequest) => {
  const response = await client.patch('/api/v1/appointment/pending', data);
  return response.data.data;
};

export const usePatchAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PICK_DETAIL] });
    },
  });
};
