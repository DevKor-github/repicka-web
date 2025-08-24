import client from '@/common/utils/client';
import type { TradeMethods, TransactionType } from '@/libs/types/item';
import { useMutation } from '@tanstack/react-query';

export interface PostAppointmentResponse {
  message: string;
  data: {
    currentAppointment: {
      isPresent: boolean;
      chatRoomId: number | null;
      appointment: {
        appointmentId: number;
        itemId: number | null;
        ownerId: number | null;
        borrowerId: number | null;
        type: TransactionType;
        rentalDate: string;
        returnDate: string;
        rentalLocation: string;
        returnLocation: string;
        price: number;
        deposit: number;
      };
    };
  };
}
interface PostSaleAppointmentRequest {
  itemId: number;
  startDate: string;
  startLocation: string;
  price: number;
  tradeMethod: TradeMethods;
}

const postSaleAppointment = async (data: PostSaleAppointmentRequest) => {
  const response = await client.post<PostAppointmentResponse>('/api/v1/appointment/sale', data);
  return response.data.data;
};

export const usePostSaleAppointment = () => {
  return useMutation({
    mutationFn: postSaleAppointment,
  });
};
