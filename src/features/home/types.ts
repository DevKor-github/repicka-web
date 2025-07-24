import type { ProductType, TransactionType } from '@/libs/types/item';

export interface ItemInterface {
  itemId: number;
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  thumbnail: string;
  title: string;
  rentalFee: number;
  salePrice: number;
  deposit: number;
  likeCount: number;
  chatRoomCount: number;
  available: boolean;
}

export const ItemOrderArray = [
  'RECENT',
  'LIKE',
  'RENTAL_FEE',
  // 'SALE_PRICE'
] as const;
export type ItemOrderType = (typeof ItemOrderArray)[number];
export const ItemOrderMap: Record<ItemOrderType, string> = {
  RECENT: '최신순',
  LIKE: '좋아요순',
  RENTAL_FEE: '가격순', // TODO: 흠...
  // SALE_PRICE: '가격순',
};

// TODO: quality, price는 백엔드 api가 없음
export const FilterTypeArray = [
  'transaction-type',
  'product-type',
  'size',
  'color',
  'price',
  'quality',
  'trade-method',
] as const;
export type FilterType = (typeof FilterTypeArray)[number];
export const FilterTypeMap: Record<FilterType, string> = {
  'product-type': '종목',
  'transaction-type': '대여/판매',
  size: '사이즈',
  color: '색상',
  price: '가격',
  quality: '품질',
  'trade-method': '거래방식',
};
