import HockeyIcon from '@/libs/assets/HockeyIcon';
import type { PostType, ProductType, TradeType } from '@/libs/types/post';
import type { JSX } from 'react';

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

export const ICON_MAP: Record<ProductType | PostType | TradeType, (className: string) => JSX.Element> = {
  SOCCER: className => <span className={`mgc_football_fill ${className}`} />,
  BASKETBALL: className => <span className={`mgc_basketball_fill ${className}`} />,
  BASEBALL: className => <span className={`mgc_baseball_fill ${className}`} />,
  HOCKEY: className => (
    <span className={className}>
      <HockeyIcon />
    </span>
  ),
  VARSITY_JACKET: className => <span className={`mgc_coat_fill ${className}`} />,
  SELF_MADE: className => <span className={`mgc_hand_fill ${className}`} />,
  ACCESSORY: className => <span className={`mgc_scarf_fill ${className}`} />,
  VINTAGE: className => <span className={`mgc_beard_fill ${className}`} />,
  REFORM: className => <span className={`mgc_scissors_2_fill ${className}`} />,
  OTHER: className => <span className={`mgc_coathanger_fill ${className}`} />,
  RENTAL: className => <span className={`mgc_basket_fill ${className}`} />,
  SALE: className => <span className={`mgc_wallet_4_fill ${className}`} />,
  DIRECT: className => <span className={`mgc_group_fill ${className}`} />,
  DELIVERY: className => <span className={`mgc_package_2_fill ${className}`} />,
};

export default iconMap;
