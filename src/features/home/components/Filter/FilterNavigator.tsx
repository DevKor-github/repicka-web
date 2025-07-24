import { FilterTypeArray, FilterTypeMap } from '@/features/home/types';

const FilterNavigator = () => {
  return (
    <div>
      {FilterTypeArray.map(filter => (
        <button key={filter}>{FilterTypeMap[filter]}</button>
      ))}
    </div>
  );
};
export default FilterNavigator;
