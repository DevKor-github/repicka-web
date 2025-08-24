import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';
import { useQuery } from '@tanstack/react-query';

export interface ItemListRequest {
  startDate?: string;
  endDate?: string;
  startPrice?: number;
  endPrice?: number;
  keyword?: string;
  productTypes?: ProductType[];
  transactionTypes?: TransactionType[];
  sizes?: Size[];
  colors?: Color[];
  tradeMethods?: TradeMethods[];
  qualities?: Quality[];
}
interface ItemCountResponse {
  message: string;
  data: { totalCount: number };
}

const getItemCount = async (params: ItemListRequest) => {
  const response = await client.get<ItemCountResponse>('/api/v1/item/search/count', { params });
  return response.data;
};

export const useGetItemCount = (params: ItemListRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ITEM_COUNT, params],
    queryFn: () => getItemCount(params),
    select: data => data.data.totalCount,
  });
};
