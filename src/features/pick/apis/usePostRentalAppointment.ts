import { useMutation } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { PostAppointmentResponse } from '@/features/pick/apis/usePostSaleAppointment';
import type { TradeMethods } from '@/libs/types/item';
import { useHandleError } from '@/common/hooks/useHandleError';

interface PostRentalAppointmentRequest {
  itemId: number;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  price: number;
  deposit: number;
  tradeMethod: TradeMethods;
}
const postRentalAppointment = async (data: PostRentalAppointmentRequest) => {
  const response = await client.post<PostAppointmentResponse>('/api/v1/appointment/rental', data);
  return response.data.data;
};
export const usePostRentalAppointment = () => {
  const handleError = useHandleError();

  return useMutation({
    mutationFn: postRentalAppointment,
    onError: error => handleError(error, 'PICK 생성에 실패했어요'),
  });
};
