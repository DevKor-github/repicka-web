import client from '@/common/utils/client';
import type { LikeInterface } from '../types';
import { useQuery } from '@tanstack/react-query';

export interface LikeResponse {
  message: string;
  data: LikeInterface[];
}

const getLike = async () => {
  const res = await client.get<LikeResponse>('/api/v1/like');
  return res.data;
};

export const useGetLike = () => {
  return useQuery({
    queryKey: ['like'],
    queryFn: getLike,
    select: response => response.data,
  });
};
