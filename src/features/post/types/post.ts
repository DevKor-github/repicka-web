import type { ColorType, TransactionType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/item';

export interface PostPayload {
  item: {
    productTypes: ProductType[];
    size: SizeType;
    color: ColorType;
    quality: QualityType;
    title: string;
    description: string;
    location: string;
    tradeMethod: TradeType;
    canDeal: boolean;
  };
  transactionTypes: TransactionType[];
  rentalFee: number;
  salePrice: number;
  deposit: number;
  images: string[];
}
