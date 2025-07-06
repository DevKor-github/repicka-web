import client from '@/common/utils/client';
import type { PostInterface } from '@/libs/types/post';
import { useQuery } from '@tanstack/react-query';

const getPostList = async () => {
  const response = await client.get<{ message: string; data: PostInterface[] }>('/api/v1/post/search');
  return response.data;
};

export const useGetPostList = () => {
  return useQuery({
    queryKey: ['post-list'],
    queryFn: getPostList,
    select: data => data.data as PostInterface[],
  });
};
