import type { TagType } from '@/libs/types/item';
import TagOptionBtn from '@/common/components/TagOptionBtn';

interface TagOptionsProps<T extends TagType> {
  map?: Record<T, string>;
  array?: T[];
  selected: T[];
  onClick: (t: T, isSelected: boolean) => void;
}
const TagOptions = <T extends TagType>({ map, array, selected, onClick }: TagOptionsProps<T>) => {
  const items = (map ? (Object.keys(map) as T[]) : array) || [];

  return items.map(key => {
    const t = key as T;
    const isSelected = selected.includes(t);
    return <TagOptionBtn key={key} type={t} isSelected={isSelected} onClick={() => onClick(t, isSelected)} />;
  });
};

export default TagOptions;
