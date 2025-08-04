import { useQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';
import type { ItemInterface, ItemOrderType } from '@/features/home/types';
import type { ItemListRequest } from '@/features/home/apis/useGetItemCount';

export interface GetItemListRequest extends ItemListRequest {
  pageSize: number;
  itemOrder?: ItemOrderType;
  cursorId?: number;
  cursorValue?: number;
  cursorDate?: string;
}
export interface ItemListResponse {
  message: string;
  data: { items: ItemInterface[]; hasNext: boolean; cursorId: number };
}

const getItemList = async (params: GetItemListRequest) => {
  const response = await client.get<ItemListResponse>('/api/v1/item/search', { params });
  return response.data;
};

export const useGetItemList = (params: GetItemListRequest) => {
  return useQuery({
    queryKey: ['item-list', params],
    queryFn: () => getItemList(params),
    select: data => data.data,
  });
};
