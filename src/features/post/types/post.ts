// 실제 서버에 전달되어야 하는 타입

import type { Color, TransactionType, ProductType, Quality, Size, TradeMethods } from '@/libs/types/item';

export interface PostPayload {
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  title: string;
  description: string;
  color: Color | null;
  size: Size | null;
  quality: Quality | null;
  deposit: number;
  rentalFee: number;
  salePrice: number;
  location: string;
  tradeMethods: TradeMethods[];
  canDeal: boolean;
}

export interface PostItemRequest extends PostPayload {
  images: string[];
}
