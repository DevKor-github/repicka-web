import { useInfiniteQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';
import type { ItemInterface, ItemOrderType } from '@/features/home/types';
import type { ItemListRequest } from '@/features/home/apis/useGetItemCount';

export interface GetItemListRequest extends ItemListRequest {
  pageSize: number;
  itemOrder?: ItemOrderType;
  cursorId?: number | null;
  cursorLike?: number | null;
  cursorDate?: string | null;
}
export interface ItemListResponse {
  message: string;
  data: {
    items: ItemInterface[];
    hasNext: boolean;
    cursorId: number | null;
    cursorLike: number | null;
    cursorDate: string | null;
  };
}

interface PageParam {
  cursorId?: number | null;
  cursorLike?: number | null;
  cursorDate?: string | null;
}

const getItemList = async (params: GetItemListRequest) => {
  const response = await client.get<ItemListResponse>('/api/v1/item/search', { params });
  return response.data;
};

export const useGetItemList = (params: Omit<GetItemListRequest, 'cursorId' | 'cursorLike' | 'cursorDate'>) => {
  const initialPageParam: PageParam = {};

  return useInfiniteQuery({
    queryKey: ['item-list', params],
    queryFn: ({ pageParam }) => getItemList({ ...params, ...pageParam }),
    getNextPageParam: lastPage =>
      lastPage.data.hasNext
        ? {
            cursorId: lastPage.data.cursorId,
            cursorLike: lastPage.data.cursorLike,
            cursorDate: lastPage.data.cursorDate,
          }
        : undefined,
    initialPageParam,
    select: data => data.pages.flatMap(page => page.data.items),
  });
};
