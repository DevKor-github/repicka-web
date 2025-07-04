import type { PostType, ProductType, TradeType } from '@/libs/types/post';

const iconMap: Record<string, string> = {
  축구: 'mgc_football_fill',
  농구: 'mgc_basketball_fill',
  야구: 'mgc_baseball_fill',
  // 하키: 'mgc_basketball_fill',
  과잠: 'mgc_coat_fill',
  자체제작: 'mgc_hand_fill',
  악세서리: 'mgc_scarf_fill',
  빈티지: 'mgc_beard_fill',
  리폼: 'mgc_scissors_2_fill',
  기타: 'mgc_coathanger_fill',
  대여: 'mgc_basket_fill',
  판매: 'mgc_wallet_4_fill',
  직거래: 'mgc_group_fill',
  택배거래: 'mgc_package_2_fill',
};

export default iconMap;

export const ICON_MAP: Record<
  Exclude<ProductType, 'HOCKEY'> | PostType | Exclude<TradeType, 'DIRECT_AND_PARCEL'>,
  string
> = {
  SOCCER: 'mgc_football_fill',
  BASKETBALL: 'mgc_basketball_fill',
  BASEBALL: 'mgc_baseball_fill',
  VARSITY_JACKET: 'mgc_coat_fill',
  SELF_MADE: 'mgc_hand_fill',
  ACCESSORY: 'mgc_scarf_fill',
  VINTAGE: 'mgc_beard_fill',
  REFORM: 'mgc_scissors_2_fill',
  OTHER: 'mgc_coathanger_fill',
  RENTAL: 'mgc_basket_fill',
  SALE: 'mgc_wallet_4_fill',
  DIRECT: 'mgc_group_fill',
  PARCEL: 'mgc_package_2_fill',
};

// export default ICON_MAP;
