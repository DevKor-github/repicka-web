import Drawer from '@/common/components/Drawer';
import * as s from './style.css';

import SelectButton from '@/common/components/SelectButton';
import useDrawer from '@/common/hooks/useDrawer';
import DatePickButton from '@/features/home/components/DatePickButton';
import SortTriggerButton from '@/features/home/components/SortControl';
import Filter from '@/features/home/components/Filter';
import { FilterTypeArray, FilterTypeMap } from '@/features/home/types';
import { cx } from '@styled-system/css';

interface Props {
  itemCounts: number;
}
const SearchControls = ({ itemCounts }: Props) => {
  const { open, drawerState } = useDrawer();

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
          <div className={s.ButtonWrapper}>
            {FilterTypeArray.map(filter => (
              <SelectButton active={false} onClick={open}>
                {FilterTypeMap[filter]}
              </SelectButton>
            ))}
          </div>
          <div className={s.LeftGradient} />
          <button className={cx(s.FilterButton, 'mgc_settings_6_line')} onClick={open} />
        </div>
      </div>
      <Drawer title="필터" drawerState={drawerState}>
        <Filter />
      </Drawer>
    </>
  );
};
export default SearchControls;
