import { useState } from 'react';

import * as s from './style.css';

import FilterNavigator from '@/features/home/components/Filter/FilterNavigator';
import type { FilterType } from '@/features/home/types';

const Filter = () => {
  const [state, setState] = useState<FilterType>('product-type');

  return (
    <div className={s.Container}>
      <FilterNavigator state={state} setState={setState} />
    </div>
  );
};
export default Filter;
