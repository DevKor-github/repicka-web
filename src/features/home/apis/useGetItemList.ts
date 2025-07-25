import { useQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';
import type { ItemInterface, ItemOrderType } from '@/features/home/types';
import type { Color, ProductType, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export interface ItemListRequest {
  pageSize: number;
  itemOrder?: ItemOrderType;
  startDate?: string;
  endDate?: string;
  startPrice?: number;
  endPrice?: number;
  cursorId?: number;
  cursorValue?: number;
  cursorDate?: string;
  keyword?: string;
  productTypes?: ProductType[];
  transactionTypes?: TransactionType[];
  sizes?: Size[];
  colors?: Color[];
  tradeMethods?: TradeMethods[];
}
export interface ItemListResponse {
  message: string;
  data: { items: ItemInterface[]; totalCount: number };
}

const getItemList = async (params: ItemListRequest) => {
  const response = await client.get<ItemListResponse>('/api/v1/item/search', { params });
  return response.data;
};

export const useGetItemList = (params: ItemListRequest) => {
  return useQuery({
    queryKey: ['item-list', params],
    queryFn: () => getItemList(params),
    select: data => data.data,
  });
};
