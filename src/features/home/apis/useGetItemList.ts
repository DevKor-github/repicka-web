import { useInfiniteQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';
import type { ItemInterface, ItemOrderType } from '@/features/home/types';
import type { ItemListRequest } from '@/features/home/apis/useGetItemCount';

export interface GetItemListRequest extends ItemListRequest {
  pageSize: number;
  itemOrder?: ItemOrderType;
  cursorId?: number;
}
export interface ItemListResponse {
  message: string;
  data: { items: ItemInterface[]; hasNext: boolean; cursorId: number };
}

const getItemList = async (params: GetItemListRequest) => {
  const response = await client.get<ItemListResponse>('/api/v1/item/search', { params });
  return response.data;
};

export const useGetItemList = (params: Exclude<GetItemListRequest, 'cursorId'>) => {
  return useInfiniteQuery({
    queryKey: ['item-list', params],
    queryFn: ({ pageParam: cursorId }) => getItemList({ ...params, cursorId }),
    getNextPageParam: lastPage => (lastPage.data.hasNext ? lastPage.data.cursorId : undefined),
    initialPageParam: 0,
    select: data => data.pages.flatMap(page => page.data.items),
  });
};
