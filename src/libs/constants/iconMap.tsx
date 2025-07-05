import type { PostType, ProductType, TradeType } from '@/libs/types/post';

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
