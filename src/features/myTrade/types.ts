import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export interface UserItemInterface {
  itemId: number;
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  thumbnail: string;
  title: string;
  rentalFee: number;
  salePrice: number;
  deposit: number;
  size: Size;
  color: Color;
  quality: Quality;
  tradeMethods: TradeMethods[];
  likeCount: number;
  chatRoomCount: number;
  repostDate: string;
  isSold: boolean;
}
