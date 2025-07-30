import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

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
  quality: Quality;
  size: Size;
  color: Color;
  tradeMethods: TradeMethods[];
}

export type ItemOrderType = 'RECENT' | 'LIKE' | 'RENTAL_FEE' | 'SALE_PRICE';
