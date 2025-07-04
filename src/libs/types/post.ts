export const POST_TYPES_MAP = {
  SALE: '구매',
  RENTAL: '대여',
};
export const PRODUCT_TYPES_MAP = {
  HOCKEY: '아이스하키',
  SOCCER: '축구',
  BASKETBALL: '농구',
  BASEBALL: '야구',
  VARSITY_JACKET: '과잠',
  ACCESSORY: '악세사리',
  SELF_MADE: '자체제작',
  VINTAGE: '빈티지',
  REFORM: '리폼',
  OTHER: '기타',
};
export const QUALITY_TYPES_MAP = {
  BEST: '최상',
  HIGH: '상',
  MIDDLE: '중',
  LOW: '하',
};
export const COLOR_TYPES_MAP = {
  CRIMSON: 'Crimson',
  WHITE: 'White',
  BLACK: 'Black',
  IVORY: 'Ivory',
  OTHER: '기타',
};
export const TRADE_TYPES_MAP = {
  DIRECT: '직거래',
  PARCEL: '택배거래',
  DIRECT_AND_PARCEL: '직거래 및 택배거래',
};
export const SIZE_TYPES_ARRAY = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export type PostType = keyof typeof POST_TYPES_MAP;
export type ProductType = keyof typeof PRODUCT_TYPES_MAP;
export type QualityType = keyof typeof QUALITY_TYPES_MAP;
export type ColorType = keyof typeof COLOR_TYPES_MAP;
export type TradeType = keyof typeof TRADE_TYPES_MAP;
export type SizeType = (typeof SIZE_TYPES_ARRAY)[number];
export type TagType = PostType | ProductType | QualityType | ColorType | TradeType;

export interface PostInterface {
  id: number;
  postType: PostType;
  title: string;
  productTypes: ProductType[];
  thumbnail: string;
  price: number;
  likeCount: number;
  chatRoomCount: number;
  available: boolean;
}
