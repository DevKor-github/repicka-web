import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface GetSaleAvailabilityResponse {
  message: string;
  data: string;
}
const getSaleAvailability = async (itemId: number) => {
  const response = await client.get<GetSaleAvailabilityResponse>(`/api/v1/item/${itemId}/sale-availability`);
  return response.data.data;
};

export const useGetSaleAvailability = (itemId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SALE_AVAILABILITY, itemId],
    queryFn: () => getSaleAvailability(itemId),
  });
};
