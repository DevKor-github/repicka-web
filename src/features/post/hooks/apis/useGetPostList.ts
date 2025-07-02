import client from '@/common/utils/client';
import type { PostInterface } from '@/libs/types/post';
import { useQuery } from '@tanstack/react-query';

const getPostList = async () => {
  // TODO: 이거 GET 요청에 Body 넣어야 되는데 그러면 안됨 ㅋㅋ
  const response = await client.get<{ message: string; data: PostInterface[] }>('/api/v1/post/search');
  return response.data;
};

export const useGetPostList = () => {
  return useQuery({
    queryKey: ['post-list'],
    queryFn: getPostList,
  });
};
