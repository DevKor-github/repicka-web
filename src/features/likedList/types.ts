import type { ProductType, TransactionType } from '@/libs/types/item';

export interface LikeInterface {
  itemId: number;
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  title: string;
  thumbnail: string;
  rentalFee: number;
  salePrice: number;
  deposit: number;
}
