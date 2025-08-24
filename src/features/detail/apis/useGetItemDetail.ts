import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { ItemDetailResponse } from '@/features/detail/types';
import { QUERY_KEYS } from '@/libs/queryKeys';

const getItemDetail = async (id: number) => {
  const response = await client.get<ItemDetailResponse>(`/api/v1/item/${id}`);

  return response.data;
};

const useGetItemDetail = (id?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ITEM_DETAIL, id],
    queryFn: () => getItemDetail(id!),
    select: data => data.data,
    enabled: id !== undefined,
  });
};

export default useGetItemDetail;
