export const PRODUCT_TYPES_MAP = {
  HOCKEY: '아이스하키',
  BASEKETBALL: '농구',
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

export type ProductType = keyof typeof PRODUCT_TYPES_MAP;

export interface PostInterface {
  id: number;
  postType: 'SALE' | 'RENTAL';
  title: string;
  productTypes: ProductType[];
  thumbnail: string;
  price: number;
  likeCount: number;
  chatRoomCount: number;
  available: boolean;
}
