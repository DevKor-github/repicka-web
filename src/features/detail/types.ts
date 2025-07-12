import type { ColorType, TransactionType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/item';
import type { UserInterface } from '@/libs/types/user';

export interface ItemInfoInterface {
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  title: string;
  description: string;
  color: ColorType;
  size: SizeType;
  quality: QualityType;
  rentalFee: number;
  salePrice: number;
  deposit: number;
  location: string;
  tradeMethods: TradeType[];
  canDeal: boolean;
  likeCount: number;
  chatRoomCount: number;
  saleDate: string | null;
  repostDate: string;
  images: string[];
  mine: boolean;
  liked: boolean;
}
export interface ItemDetailInterface {
  itemId: number;
  owner: UserInterface;
  itemInfo: ItemInfoInterface;
}

export interface ItemDetailResponse {
  message: string;
  data: ItemDetailInterface;
}
