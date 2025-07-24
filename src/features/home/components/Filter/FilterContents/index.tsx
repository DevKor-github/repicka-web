import type { FilterType } from '@/features/home/types';

import * as s from './style.css';
import TagOptionBtn from '@/common/components/TagOptionBtn';
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
  type TradeMethods,
  type TransactionType,
} from '@/libs/types/item';

interface Props {
  type: FilterType;
}
const FilterContents = ({ type }: Props) => {
  const contents = () => {
    switch (type) {
      case 'transaction-type':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(TRANSACTION_TYPES_MAP).map(key => (
              <TagOptionBtn key={key} type={key as TransactionType} />
            ))}
          </div>
        );
      case 'product-type':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(PRODUCT_TYPES_MAP).map(key => (
              <TagOptionBtn key={key} type={key as ProductType} />
            ))}
          </div>
        );
      case 'size':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {SIZE_ARRAY.map(size => (
              <TagOptionBtn key={size} type={size} />
            ))}
          </div>
        );
      case 'color':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(COLOR_MAP).map(key => (
              <TagOptionBtn key={key} type={key as Color} />
            ))}
          </div>
        );
      case 'price':
        return <div>아 만들기 개귀찮네</div>;
      case 'quality':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(QUALITY_MAP).map(key => (
              <TagOptionBtn key={key} type={key as Quality} />
            ))}
          </div>
        );
      case 'trade-method':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(TRADE_METHODS_MAP).map(key => (
              <TagOptionBtn key={key} type={key as TradeMethods} />
            ))}
          </div>
        );
    }
  };
  return <div className={s.Container}>{contents()}</div>;
};
export default FilterContents;
