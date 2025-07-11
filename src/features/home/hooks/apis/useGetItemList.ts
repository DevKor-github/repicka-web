import client from '@/common/utils/client';
import type { ItemInterface } from '@/features/home/types';
import { useQuery } from '@tanstack/react-query';

export interface ItemListResponse {
  message: string;
  data: ItemInterface[];
}

const MOCK_DATA: ItemListResponse = {
  message: 'success',
  data: [
    {
      itemId: 1,
      available: true,
      chatRoomCount: 5,
      likeCount: 12,
      transactionTypes: ['RENTAL'],
      rentalFee: 10000,
      salePrice: 10000,
      deposit: 10000,
      title: '빈티지 야구 레플리카(1920년도)',
      productTypes: ['BASEBALL', 'REFORM'],
      thumbnail: 'https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg',
    },
    {
      itemId: 2,
      available: true,
      chatRoomCount: 0,
      likeCount: 18,
      transactionTypes: ['RENTAL'],
      rentalFee: 100000,
      salePrice: 100000,
      deposit: 100000,
      title: '빈티지 야구 레플리카(1950년도)',
      productTypes: ['BASKETBALL', 'REFORM'],
      thumbnail: 'https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg',
    },
  ],
};

const getItemList = async () => {
  return MOCK_DATA;
  const response = await client.get<ItemListResponse>('/api/v1/item/search');
  return response.data;
};

export const useGetItemList = () => {
  return useQuery({
    queryKey: ['item-list'],
    queryFn: getItemList,
    select: data => data.data,
  });
};
