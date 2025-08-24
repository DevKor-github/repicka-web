import { useState } from 'react';
import { cx } from '@styled-system/css';

import * as s from './style.css';

import Drawer from '@/common/components/Drawer';
import SelectButton from '@/common/components/SelectButton';
import useDrawer from '@/common/hooks/useDrawer';
import DatePickButton from '@/features/home/components/DatePickButton';
import SortTriggerButton from '@/features/home/components/SortControl';
import Filter from '@/features/home/components/Filter';
import { FilterTypeArray, FilterTypeMap, type FilterType } from '@/features/home/types';
import { useSearchParams } from 'react-router';
import type { TagType } from '@/libs/types/item';

interface Props {
  itemCounts: number;
}
const SearchControls = ({ itemCounts }: Props) => {
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<FilterType>('product-type');
  const { open, drawerState, close } = useDrawer();

  const handleFilterClick = (filter: FilterType) => {
    setState(filter);
    open();
  };

  return (
    <>
      <div className={s.Container}>
        <div className={s.TopContainer}>
          <div className={s.ResultBar}>
            <span>검색결과</span>
            <span className={s.ResultCount}>({itemCounts})</span>
          </div>
          <div className={s.TopRightControl}>
            <SortTriggerButton />
            <DatePickButton itemCounts={itemCounts} />
          </div>
        </div>
        <div className={s.SelectButtonContainer}>
          <div className={s.Gradient({ position: 'left' })} />
          <div className={s.ButtonWrapper}>
            {FilterTypeArray.map(filter => {
              const selected = (() => {
                if (filter === 'price') {
                  if (searchParams.get('start-price') !== null && searchParams.get('end-price') !== null) {
                    return [searchParams.get('start-price') as TagType, searchParams.get('end-price') as TagType];
                  }
                  return [];
                }
                return searchParams.getAll(filter) as TagType[];
              })();

              return (
                <SelectButton key={filter} onClick={() => handleFilterClick(filter)} selected={selected}>
                  {FilterTypeMap[filter]}
                </SelectButton>
              );
            })}
          </div>
          <div className={s.Gradient({ position: 'right' })} />
          <button
            className={cx(s.FilterButton, 'mgc_settings_6_line')}
            onClick={() => handleFilterClick('transaction-type')}
          />
        </div>
      </div>
      <Drawer title="필터" drawerState={drawerState}>
        <Filter state={state} setState={setState} itemCounts={itemCounts} close={close} />
      </Drawer>
    </>
  );
};
export default SearchControls;
