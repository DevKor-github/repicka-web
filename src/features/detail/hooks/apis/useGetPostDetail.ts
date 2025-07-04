import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { ColorType, PostType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/post';

export interface PostDetailResponse {
  message: string;
  data: {
    id: number;
    writer: {
      id: number;
      nickname: string;
      profileImageUrl: string;
      isKoreanUnivVerified: boolean;
    };
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

const getPostDetail = async (id: number) => {
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
