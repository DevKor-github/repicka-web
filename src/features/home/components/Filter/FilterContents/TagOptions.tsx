import type { TagType } from '@/libs/types/item';
import TagOptionBtn from '@/common/components/TagOptionBtn';
import { useSearchParams } from 'react-router';
import type { FilterType } from '@/features/home/types';

interface TagOptionsProps<T extends TagType> {
  map?: Record<T, string>;
  array?: T[];
  selected: T[];
  type: FilterType;
}
const TagOptions = <T extends TagType>({ map, array, selected, type }: TagOptionsProps<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const items = (map ? (Object.keys(map) as T[]) : array) || [];

  const handleTOBClick = (t: T, isSelected: boolean) => {
    if (isSelected) {
      searchParams.delete(type, t);
    } else {
      searchParams.append(type, t);
    }
    setSearchParams(searchParams);
  };

  return items.map(key => {
    const t = key as T;
    const isSelected = selected.includes(t);
    return <TagOptionBtn key={key} type={t} isSelected={isSelected} onClick={() => handleTOBClick(t, isSelected)} />;
  });
};

export default TagOptions;
