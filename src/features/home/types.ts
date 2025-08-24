import {
  COLOR_MAP,
  PRODUCT_TYPES_MAP,
  QUALITY_MAP,
  SIZE_ARRAY,
  TRADE_METHODS_MAP,
  TRANSACTION_TYPES_MAP,
  type Color,
  type ProductType,
  type Quality,
  type Size,
  type TagType,
  type TradeMethods,
  type TransactionType,
} from '@/libs/types/item';

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
  quality: Quality;
  size: Size;
  color: Color;
  tradeMethods: TradeMethods[];
}

export const ItemOrderArray = ['RECENT', 'LIKE'] as const;
export type ItemOrderType = (typeof ItemOrderArray)[number];
export const ItemOrderMap: Record<ItemOrderType, string> = {
  RECENT: '최신순',
  LIKE: '좋아요순',
};

export const FilterTypeArray = [
  'transaction-type',
  'product-type',
  'size',
  'color',
  'price',
  'quality',
  'trade-method',
] as const;
export type FilterType = (typeof FilterTypeArray)[number];
export const FilterTypeMap: Record<FilterType, string> = {
  'product-type': '종목',
  'transaction-type': '대여/판매',
  size: '사이즈',
  color: '색상',
  price: '가격',
  quality: '품질',
  'trade-method': '거래방식',
};
export const FilterTypeToIndexMap: Record<FilterType, number> = {
  'transaction-type': 0,
  'product-type': 1,
  size: 2,
  color: 3,
  price: 4,
  quality: 5,
  'trade-method': 6,
};
export const FilterTypeToList: Record<Exclude<FilterType, 'price'>, TagType[]> = {
  'transaction-type': Object.keys(TRANSACTION_TYPES_MAP) as TransactionType[],
  'product-type': Object.keys(PRODUCT_TYPES_MAP) as ProductType[],
  size: SIZE_ARRAY as unknown as Size[],
  color: Object.keys(COLOR_MAP) as Color[],
  quality: Object.keys(QUALITY_MAP) as Quality[],
  'trade-method': Object.keys(TRADE_METHODS_MAP) as TradeMethods[],
};
