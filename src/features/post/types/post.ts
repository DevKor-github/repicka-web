import type { ColorType, TransactionType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/item';

// TODO: 바뀐 API Request 형식에 맞춰 수정해야될거임
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
