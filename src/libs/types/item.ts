export const TRANSACTION_TYPES_MAP = {
  SALE: '구매',
  RENTAL: '대여',
} as const;
export const PRODUCT_TYPES_MAP = {
  SOCCER: '축구',
  BASKETBALL: '농구',
  BASEBALL: '야구',
  HOCKEY: '하키',
  VARSITY_JACKET: '과잠',
  ACCESSORY: '악세사리',
  SELF_MADE: '자체제작',
  VINTAGE: '빈티지',
  REFORM: '리폼',
  PRODUCT_OTHER: '기타',
} as const;
export const QUALITY_MAP = {
  BEST: '최상',
  HIGH: '상',
  MIDDLE: '중',
  LOW: '하',
} as const;
export const COLOR_MAP = {
  CRIMSON: 'Crimson',
  WHITE: 'White',
  BLACK: 'Black',
  IVORY: 'Ivory',
  COLOR_OTHER: '기타',
} as const;
export const TRADE_METHODS_MAP = {
  DIRECT: '직거래',
  PARCEL: '택배거래',
} as const;

export const SIZE_ARRAY = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
export const SIZE_MAP: Record<Size, Size> = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
  XXL: 'XXL',
} as const;

export const TAG_TYPES_MAP: Record<TagType, string> = {
  ...PRODUCT_TYPES_MAP,
  ...TRANSACTION_TYPES_MAP,
  ...COLOR_MAP,
  ...QUALITY_MAP,
  ...SIZE_MAP,
  ...TRADE_METHODS_MAP,
} as const;

export type TransactionType = keyof typeof TRANSACTION_TYPES_MAP;
export type ProductType = keyof typeof PRODUCT_TYPES_MAP;
export type Quality = keyof typeof QUALITY_MAP;
export type Color = keyof typeof COLOR_MAP;
export type TradeMethods = keyof typeof TRADE_METHODS_MAP;
export type Size = (typeof SIZE_ARRAY)[number];
export type TagType = TransactionType | ProductType | Quality | Color | TradeMethods | Size;
export type IconType = ProductType | TransactionType | TradeMethods;

// 타입 체크 함수 필요하면 이 아래에 선언

export function isColorType(type: TagType): type is Color {
  return type in COLOR_MAP;
}

export function isIconType(type: TagType): type is IconType {
  return type in PRODUCT_TYPES_MAP || type in TRANSACTION_TYPES_MAP || type in TRADE_METHODS_MAP;
}
