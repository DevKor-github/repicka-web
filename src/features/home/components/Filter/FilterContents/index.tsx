import { useSearchParams } from 'react-router';

import * as s from './style.css';

import { FilterTypeToList, type FilterType } from '@/features/home/types';
import { type TagType } from '@/libs/types/item';
import TagOptionBtn from '@/common/components/TagOptionBtn';
import PriceFilter from '@/features/home/components/Filter/FilterContents/PriceFilter';

interface Props {
  type: FilterType;
}
const FilterContents = ({ type }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.getAll(type) as TagType[];

  const handleTOBClick = (t: TagType, isSelected: boolean) => {
    if (isSelected) {
      searchParams.delete(type, t);
    } else {
      searchParams.append(type, t);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={s.Container}>
      {type === 'price' ? (
        <PriceFilter />
      ) : (
        <div key={type} className={s.TagOptionButtonWrapper}>
          {FilterTypeToList[type].map(t => {
            const isSelected = selected.includes(t);
            return (
              <TagOptionBtn key={t} type={t} isSelected={isSelected} onClick={() => handleTOBClick(t, isSelected)} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterContents;
