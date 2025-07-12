import client from '@/common/utils/client';
import type { ItemInterface } from '@/features/home/types';
import { useQuery } from '@tanstack/react-query';

export interface ItemListResponse {
  message: string;
  data: ItemInterface[];
}

const getItemList = async () => {
  const response = await client.get<ItemListResponse>('/api/v1/item/search');
  return response.data;
};

export const useGetItemList = () => {
  return useQuery({
    queryKey: ['item-list'],
    queryFn: getItemList,
    select: data => data.data,
  });
};
