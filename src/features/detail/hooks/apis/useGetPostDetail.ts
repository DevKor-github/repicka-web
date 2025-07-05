import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { ColorType, PostType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/post';
import type { UserInterface } from '@/libs/types/user';

export interface PostDetailResponse {
  message: string;
  data: {
    id: number;
    writer: UserInterface;
    itemInfo: {
      productTypes: ProductType[];
      title: string;
      description: string;
      size: SizeType;
      color: ColorType;
      quality: QualityType;
      location: string;
      tradeMethod: TradeType;
      canDeal: boolean;
      saleDate: null; // TODO: 날짜 타입 어캐 내려오는지 확인 필요
    };
    postType: PostType;
    price: number;
    deposit: number;
    images: string[];
  };
}

const MOCK_DATA: PostDetailResponse = {
  message: 'success',
  data: {
    id: 1,
    writer: {
      id: 1,
      nickname: '까치는비가와도운다이거최대몇자까지가능한가요',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/58812281?v=4',
      isKoreanUnivVerified: true,
    },
    itemInfo: {
      title: '빈티지 야구 레플리카(1920년도)',
      description:
        '1920년도 빈티지 야구 레플리카 대여합니다!\n작년에 구매했고, 딱 한 번 입어서 상태 깨끗해요 😀\n안암역 2출 부근에서 직거래 원해요!',
      canDeal: false,
      productTypes: ['BASEBALL', 'REFORM'],
      color: 'CRIMSON',
      location: '안암역 2출',
      quality: 'HIGH',
      tradeMethod: 'DIRECT',
      size: 'M',
      saleDate: null,
    },
    price: 10000,
    deposit: 30000,
    images: ['https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg'],
    postType: 'RENTAL',
  },
};

const getPostDetail = async (id: number) => {
  return MOCK_DATA;
  const response = await client.get<PostDetailResponse>(`/api/v1/post/${id}`);
  return response.data;
};

const useGetPostDetail = (id: number) => {
  return useQuery({
    queryKey: ['postDetail', id],
    queryFn: () => getPostDetail(id),
    select: data => data.data,
  });
};

export default useGetPostDetail;
