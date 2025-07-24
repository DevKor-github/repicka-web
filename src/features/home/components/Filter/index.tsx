import * as s from './style.css';

import FilterNavigator from '@/features/home/components/Filter/FilterNavigator';
import type { FilterType } from '@/features/home/types';

interface Props {
  state: FilterType;
  setState: (state: FilterType) => void;
}
const Filter = ({ state, setState }: Props) => {
  return (
    <div className={s.Container}>
      <FilterNavigator state={state} setState={setState} />
    </div>
  );
};
export default Filter;
