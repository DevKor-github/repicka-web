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

interface Props {
  itemCounts: number;
}
const SearchControls = ({ itemCounts }: Props) => {
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
            <DatePickButton />
          </div>
        </div>
        <div className={s.SelectButtonContainer}>
          {/* TODO: 디자인 적용, 필터 로직 추가 */}
          <div className={s.Gradient({ position: 'left' })} />
          <div className={s.ButtonWrapper}>
            {FilterTypeArray.map(filter => (
              <SelectButton key={filter} active={false} onClick={() => handleFilterClick(filter)}>
                {FilterTypeMap[filter]}
              </SelectButton>
            ))}
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
