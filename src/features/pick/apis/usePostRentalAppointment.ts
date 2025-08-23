import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PostRentalAppointmentRequest {
  itemId: number;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  price: number;
  deposit: number;
}
const postRentalAppointment = async (data: PostRentalAppointmentRequest) => {
  const response = await client.post('/api/v1/appointment/rental', data);
  return response.data;
};
export const usePostRentalAppointment = () => {
  return useMutation({
    mutationFn: postRentalAppointment,
  });
};
