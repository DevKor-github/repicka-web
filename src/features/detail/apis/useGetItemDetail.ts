import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { ItemDetailResponse } from '@/features/detail/types';

const getItemDetail = async (id: number) => {
  const response = await client.get<ItemDetailResponse>(`/api/v1/item/${id}`);

  console.log(response);

  return response.data;
};

const useGetItemDetail = (id: number) => {
  return useQuery({
    queryKey: ['item-detail', id],
    queryFn: () => getItemDetail(id),
    select: data => data.data,
  });
};

export default useGetItemDetail;
