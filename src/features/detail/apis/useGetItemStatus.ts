import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import type { TransactionType } from '@/libs/types/item';
import { useQuery } from '@tanstack/react-query';

interface GetItemStatusResponse {
  message: string;
  data: {
    isPresent: boolean;
    chatRoomId: number;
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
}
const getItemStatus = async (itemId: number) => {
  const response = await client.get<GetItemStatusResponse>(`/api/v1/item/${itemId}/current`);
  return response.data.data;
};
export const useGetItemStatus = (itemId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ITEM_STATUS, itemId],
    queryFn: () => getItemStatus(itemId),
  });
};
