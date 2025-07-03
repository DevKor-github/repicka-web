import client from '@/common/utils/client';
import type { PostInterface } from '@/libs/types/post';
import { useQuery } from '@tanstack/react-query';

const getPostList = async () => {
  return {
    message: '조건에 따른 게시글 목록을 성공적으로 조회하였습니다.',
    data: [
      {
        id: 4,
        postType: 'SALE',
        title: '2025 야구 리폼 유니폼',
        productTypes: ['HOCKEY', 'REFORM'],
        thumbnail:
          'https://mblogthumb-phinf.pstatic.net/MjAyMzA4MDRfMTc2/MDAxNjkxMTE0NzQ5OTcz.pOyt39uX8knMD9hZvNLyX3aJGYWGerX4m8CvQgo-Hggg.zyf-KpQOOG0ThLVyCR1-fYzlUX6_W3JdE5Nit2rN0u4g.JPEG.uniunisports/KakaoTalk_20230516_100049984_03.jpg?type=w800',
        price: 10000,
        likeCount: 0,
        chatRoomCount: 0,
        available: true,
      },
      {
        id: 8,
        postType: 'RENTAL',
        title: '2025 하키 리폼 유니폼',
        productTypes: ['HOCKEY', 'REFORM'],
        thumbnail: 'https://crimsonstore.co.kr/web/product/medium/202411/946499052f312a849ec8a8712ab0a8fc.jpg',
        price: 20000,
        likeCount: 5,
        chatRoomCount: 12,
        available: true,
      },
    ],
  };
  // TODO: 이거 GET 요청에 Body 넣어야 되는데 그러면 안됨 ㅋㅋ
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
