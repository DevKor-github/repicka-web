import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PostSaleAppointmentRequest {
  itemId: number;
  startDate: string;
  startLocation: string;
  price: number;
}

const postSaleAppointment = async (data: PostSaleAppointmentRequest) => {
  const response = await client.post('/api/v1/appointment/sale', data);
  return response.data;
};

export const usePostSaleAppointment = () => {
  return useMutation({
    mutationFn: postSaleAppointment,
  });
};
