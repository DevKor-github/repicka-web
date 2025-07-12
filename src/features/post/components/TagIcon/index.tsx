import HockeyIcon from '@/libs/assets/HockeyIcon';
import { ICON_MAP } from '@/libs/constants/iconMap';
import type { ProductType, TradeType, TransactionType } from '@/libs/types/item';

interface TagIconProps {
  className?: string;
  type: ProductType | TransactionType | TradeType;
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
