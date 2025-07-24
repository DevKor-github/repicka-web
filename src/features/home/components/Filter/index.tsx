import * as s from './style.css';

import FilterNavigator from '@/features/home/components/Filter/FilterNavigator';
import type { FilterType } from '@/features/home/types';

interface Props {
  state: FilterType;
  setState: (state: FilterType) => void;
  itemCounts: number;
  close: () => void;
}
const Filter = ({ state, setState, itemCounts, close }: Props) => {
  return (
    <div className={s.Container}>
      <FilterNavigator state={state} setState={setState} />
      <div className={s.Wrapper}>
        <div></div>
        <button className={s.ViewButton} onClick={close}>
          {itemCounts}개 상품 보기
        </button>
      </div>
    </div>
  );
};
export default Filter;
