import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';

import * as s from './style.css';

import FilterNavigator from '@/features/home/components/Filter/FilterNavigator';
import FilterContents from '@/features/home/components/Filter/FilterContents';
import { FilterTypeArray, FilterTypeToIndexMap, type FilterType } from '@/features/home/types';

interface Props {
  state: FilterType;
  setState: (state: FilterType) => void;
  itemCounts: number;
  close: () => void;
}
const Filter = ({ state, setState, itemCounts, close }: Props) => {
  const swiperRef = useRef<SwiperRef>(null);

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
        <button className={s.ViewButton} onClick={close}>
          {itemCounts}개 상품 보기
        </button>
      </div>
    </div>
  );
};
export default Filter;
