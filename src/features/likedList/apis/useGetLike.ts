import client from '@/common/utils/client';
import type { LikeInterface } from '../types';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/libs/queryKeys';

export interface LikeResponse {
  message: string;
  data: LikeInterface[];
}

const getLike = async () => {
  const res = await client.get<LikeResponse>('/api/v1/like');
  return res.data.data;
};

export const useGetLike = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.LIKE_LIST],
    queryFn: getLike,
    staleTime: 0,
  });
};
