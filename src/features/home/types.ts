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
