import { motion } from 'framer-motion';

import * as s from './style.css';

import { FilterTypeArray, FilterTypeMap, type FilterType } from '@/features/home/types';

interface Props {
  state: FilterType;
  setState: (state: FilterType) => void;
}
const FilterNavigator = ({ state, setState }: Props) => {
  return (
    <div className={s.NavigatorContainer}>
      {FilterTypeArray.map(filter => {
        const isActive = state === filter;
        return (
          <button key={filter} className={s.NavigatorButton({ active: isActive })} onClick={() => setState(filter)}>
            {FilterTypeMap[filter]}
            {isActive && <motion.div layoutId="underline" className={s.Underline} />}
          </button>
        );
      })}
    </div>
  );
};
export default FilterNavigator;
