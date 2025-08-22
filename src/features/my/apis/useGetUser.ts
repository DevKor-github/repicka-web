import client from '@/common/utils/client';
import type { UserInterface } from '../../../libs/types/types';
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
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 0,
    select: response => response.data,
  });
};
