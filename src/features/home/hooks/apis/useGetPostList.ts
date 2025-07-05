import client from '@/common/utils/client';
import type { PostInterface } from '@/libs/types/post';
import { useQuery } from '@tanstack/react-query';

export interface PostListResponse {
  message: string;
  data: PostInterface[];
}

const MOCK_DATA: PostListResponse = {
  message: 'success',
  data: [
    {
      id: 1,
      available: true,
      chatRoomCount: 5,
      likeCount: 12,
      postType: 'RENTAL',
      price: 10000,
      title: '빈티지 야구 레플리카(1920년도)',
      productTypes: ['BASEBALL', 'REFORM'],
      thumbnail: 'https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg',
    },
    {
      id: 2,
      available: true,
      chatRoomCount: 0,
      likeCount: 18,
      postType: 'RENTAL',
      price: 100000,
      title: '빈티지 야구 레플리카(1950년도)',
      productTypes: ['BASKETBALL', 'REFORM'],
      thumbnail: 'https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg',
    },
  ],
};

const getPostList = async () => {
  return MOCK_DATA;
  const response = await client.get<PostListResponse>('/api/v1/post/search');
  return response.data;
};

export const useGetPostList = () => {
  return useQuery({
    queryKey: ['post-list'],
    queryFn: getPostList,
    select: data => data.data,
  });
};
