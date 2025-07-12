import type { Color, TransactionType, ProductType, Quality, Size, TradeMethods } from '@/libs/types/item';

export interface PostPayload {
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  title: string;
  description: string;
  color: Color;
  size: Size;
  quality: Quality;
  deposit: number;
  rentalFee: number;
  salePrice: number;
  location: string;
  tradeMethods: TradeMethods[];
  canDeal: boolean;
  images: string[];
}
