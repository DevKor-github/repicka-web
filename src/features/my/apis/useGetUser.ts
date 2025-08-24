import client from '@/common/utils/client';
import { QUERY_KEYS } from '@/libs/queryKeys';
import type { UserInterface } from '@/libs/types/user';
import { useQuery } from '@tanstack/react-query';

export interface UserResponse {
  message: string;
  data: UserInterface;
}

const getUser = async () => {
  const res = await client.get<UserResponse>('/api/v1/user');
  return res.data;
};

export const useGetUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: getUser,
    select: response => response.data,
  });
};
