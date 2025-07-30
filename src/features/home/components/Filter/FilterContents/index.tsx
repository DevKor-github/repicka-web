import { useSearchParams } from 'react-router';

import * as s from './style.css';

import type { FilterType } from '@/features/home/types';
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
  type TradeMethods,
  type TransactionType,
} from '@/libs/types/item';
import TagOptions from '@/features/home/components/Filter/FilterContents/TagOptions';

interface Props {
  type: FilterType;
}
const FilterContents = ({ type }: Props) => {
  const [searchParams] = useSearchParams();
  const transactionTypes = searchParams.getAll('transaction-type') as TransactionType[];
  const productTypes = searchParams.getAll('product-type') as ProductType[];
  const sizes = searchParams.getAll('size') as Size[];
  const colors = searchParams.getAll('color') as Color[];
  const tradeMethods = searchParams.getAll('trade-method') as TradeMethods[];
  const quality = searchParams.getAll('quality') as Quality[];

  const contents = () => {
    switch (type) {
      case 'transaction-type':
        return (
          // TODO: TagOptionButtonWrapper는 price인 경우 빼곤 다 똑같으니까 얘도 간소화 하기
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions map={TRANSACTION_TYPES_MAP} selected={transactionTypes} type={type} />
          </div>
        );
      case 'product-type':
        return (
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions map={PRODUCT_TYPES_MAP} selected={productTypes} type={type} />
          </div>
        );
      case 'size':
        return (
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions array={SIZE_ARRAY as unknown as Size[]} selected={sizes} type={type} />
          </div>
        );
      case 'color':
        return (
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions map={COLOR_MAP} selected={colors} type={type} />
          </div>
        );
      case 'price':
        // TODO: 가격 필터 추가
        return <div>아 만들기 개귀찮네</div>;
      case 'quality':
        return (
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions map={QUALITY_MAP} selected={quality} type={type} />
          </div>
        );
      case 'trade-method':
        return (
          <div className={s.TagOptionButtonWrapper}>
            <TagOptions map={TRADE_METHODS_MAP} selected={tradeMethods} type={type} />
          </div>
        );
    }
  };

  return <div className={s.Container}>{contents()}</div>;
};

export default FilterContents;
