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
