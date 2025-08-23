import client from '@/common/utils/client';
import type { ProductType, TradeMethods, TransactionType } from '@/libs/types/item';
import type { PickStatus } from '@/libs/types/pick';
import { useQuery } from '@tanstack/react-query';

interface GetPickDetailResponse {
  message: string;
  data: {
    appointmentId: number;
    itemId: number;
    requesterId: number;
    ownerId: number;
    imageUrl: string;
    title: string;
    description: string;
    productTypes: ProductType[];
    rentalDate: string;
    returnDate: string | null;
    rentalLocation: string;
    returnLocation: string | null;
    price: number;
    deposit: number;
    state: PickStatus;
    type: TransactionType;
    tradeMethod: TradeMethods;
  };
}

const getPickDetail = async (id: number) => {
  const response = await client.get<GetPickDetailResponse>(`/api/v1/appointment/${id}`);
  return response.data.data;
};

export const useGetPickDetail = (id: number) => {
  return useQuery({
    queryKey: ['pick', id],
    queryFn: () => getPickDetail(id),
  });
};
