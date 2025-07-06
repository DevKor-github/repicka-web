import HockeyIcon from '@/libs/assets/HockeyIcon';
import { ICON_MAP } from '@/libs/constants/iconMap';
import type { PostType, ProductType, TradeType } from '@/libs/types/post';

interface TagIconProps {
  className?: string;
  type: ProductType | PostType | Exclude<TradeType, 'DIRECT_AND_PARCEL'>;
}
export const TagIcon = ({ className, type }: TagIconProps) => {
  if (type === 'HOCKEY')
    return (
      <span className={className}>
        <HockeyIcon />
      </span>
    );

  return <span className={`${ICON_MAP[type]} ${className}`} />;
};
