import { useEffect, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { cx } from '@styled-system/css';
import { useSearchParams } from 'react-router';

import * as s from './style.css';

import FilterNavigator from '@/features/home/components/Filter/FilterNavigator';
import FilterContents from '@/features/home/components/Filter/FilterContents';
import { FilterTypeArray, FilterTypeToIndexMap, type FilterType } from '@/features/home/types';
import { useGetItemCount } from '@/features/home/apis/useGetItemCount';

interface Props {
  state: FilterType;
  setState: (state: FilterType) => void;
  itemCounts: number;
  close: () => void;
}
const Filter = ({ state, setState, itemCounts, close }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const swiperRef = useRef<SwiperRef>(null);

  const selected = useMemo(() => FilterTypeArray.some(type => searchParams.getAll(type).length > 0), [searchParams]);

  const { data: totalCount } = useGetItemCount({});

  const resetFilter = () => setSearchParams({});

  useEffect(() => {
    // 스와이퍼와 state 동기화
    swiperRef.current?.swiper.slideTo(FilterTypeToIndexMap[state]);
  }, [state]);

  return (
    <div className={s.Container}>
      <FilterNavigator state={state} setState={setState} />
      <div className={s.Wrapper}>
        <div className={s.SwiperWrapper}>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={16}
            onSlideChange={swiper => setState(FilterTypeArray[swiper.realIndex])}
          >
            {FilterTypeArray.map(type => (
              <SwiperSlide key={type}>
                <FilterContents type={type} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className={s.ResetButton({ visible: selected })} onClick={resetFilter}>
          <span className={cx('mgc_refresh_1_fill')} />
          <p>
            초기화하고 <strong>{totalCount}</strong>개의 상품 보기
          </p>
        </button>
        <button className={s.ViewButton} onClick={close}>
          {itemCounts}개 상품 보기
        </button>
      </div>
    </div>
  );
};
export default Filter;
