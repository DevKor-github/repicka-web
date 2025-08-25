import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/libs/queryKeys';
import type { UserItemInterface } from '../types';

export interface UserItemResponse {
  message: string;
  data: UserItemInterface[];
}

const getUserItem = async (userId: number) => {
  const res = await client.get<UserItemResponse>(`/api/v1/user/${userId}/item`);

  console.log(res);

  return res.data.data;
};

export const useGetUserItem = (userId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_ITEM_LIST, userId],
    queryFn: () => getUserItem(userId),
    staleTime: 0,
  });
};
