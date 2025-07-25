import { useSearchParams } from 'react-router';

import * as s from './style.css';

import type { FilterType } from '@/features/home/types';
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
  type Size,
  type TagType,
  type TradeMethods,
  type TransactionType,
} from '@/libs/types/item';

interface Props {
  type: FilterType;
}
const FilterContents = ({ type }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const transactionTypes = searchParams.getAll('transaction-type') as TransactionType[];
  const productTypes = searchParams.getAll('product-type') as ProductType[];
  const sizes = searchParams.getAll('size') as Size[];
  const colors = searchParams.getAll('color') as Color[];
  const tradeMethods = searchParams.getAll('trade-method') as TradeMethods[];
  const quality = searchParams.getAll('quality') as Quality[];

  const handleTOBClick = (t: TagType, isSelected: boolean) => {
    if (isSelected) {
      searchParams.delete(type, t);
    } else {
      searchParams.append(type, t);
    }
    setSearchParams(searchParams);
  };

  const contents = () => {
    switch (type) {
      case 'transaction-type':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(TRANSACTION_TYPES_MAP).map(key => {
              const t = key as TransactionType;
              const isSelected = transactionTypes.includes(t);
              return (
                <TagOptionBtn
                  key={key}
                  type={t}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(t, isSelected)}
                />
              );
            })}
          </div>
        );
      case 'product-type':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(PRODUCT_TYPES_MAP).map(key => {
              const t = key as ProductType;
              const isSelected = productTypes.includes(t);
              return (
                <TagOptionBtn
                  key={key}
                  type={t}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(t, isSelected)}
                />
              );
            })}
          </div>
        );
      case 'size':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {SIZE_ARRAY.map(size => {
              const isSelected = sizes.includes(size);
              return (
                <TagOptionBtn
                  key={size}
                  type={size}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(size, isSelected)}
                />
              );
            })}
          </div>
        );
      case 'color':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(COLOR_MAP).map(key => {
              const c = key as Color;
              const isSelected = colors.includes(c);
              return (
                <TagOptionBtn
                  key={key}
                  type={c}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(c, isSelected)}
                />
              );
            })}
          </div>
        );
      case 'price':
        // TODO: 가격 필터 추가
        return <div>아 만들기 개귀찮네</div>;
      case 'quality':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(QUALITY_MAP).map(key => {
              const q = key as Quality;
              const isSelected = quality.includes(q);
              return (
                <TagOptionBtn
                  key={key}
                  type={q}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(q, isSelected)}
                />
              );
            })}
          </div>
        );
      case 'trade-method':
        return (
          <div className={s.TagOptionButtonWrapper}>
            {Object.keys(TRADE_METHODS_MAP).map(key => {
              const t = key as TradeMethods;
              const isSelected = tradeMethods.includes(t);
              return (
                <TagOptionBtn
                  key={key}
                  type={t}
                  isSelected={isSelected}
                  onClick={() => handleTOBClick(t, isSelected)}
                />
              );
            })}
          </div>
        );
    }
  };

  return <div className={s.Container}>{contents()}</div>;
};
export default FilterContents;
