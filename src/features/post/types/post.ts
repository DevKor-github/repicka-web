import type { ColorType, PostType, ProductType, QualityType, SizeType, TradeType } from "@/libs/types/post";

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
  postTypes: PostType[];
  rentalFee: number;
  salePrice: number;
  deposit: number;
  images: string[];
}
