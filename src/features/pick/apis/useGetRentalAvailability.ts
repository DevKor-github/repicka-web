import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface GetRentalAvailabilityRequest {
  itemId: number;
  year: number;
  month: number;
}
interface GetRentalAvailabilityResponse {
  message: string;
  data: {
    itemId: number;
    year: number;
    month: number;
    availability: {
      [key: string]: boolean;
    };
  };
}
const getRentalAvailability = async ({ itemId, year, month }: GetRentalAvailabilityRequest) => {
  const response = await client.get<GetRentalAvailabilityResponse>(`/api/v1/item/${itemId}/rental-availability`, {
    params: {
      year,
      month,
    },
  });
  return response.data.data.availability;
};

export const useGetRentalAvailability = (props: GetRentalAvailabilityRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RENTAL_AVAILABILITY, props],
    queryFn: () => getRentalAvailability(props),
    enabled: props.year !== 0 && props.month !== 0,
  });
};
