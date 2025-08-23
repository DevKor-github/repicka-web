// 사용할 때 grid로 사용하기
import * as s from './style.css';
import { COLOR_MAP } from '@/libs/constants/colorMap';
import { type TagType, TAG_TYPES_MAP, isIconType, isColorType } from '@/libs/types/item';
import { TagIcon } from '@/features/post/components/TagIcon';
import { cx } from '@styled-system/css';

interface SymbolProps {
  type: TagType;
  className?: string;
}
export const Symbol = ({ type, className }: SymbolProps) => {
  // 아이콘
  if (isIconType(type)) return <TagIcon type={type} className={cx(s.leftIcon, className)} />;

  // 컬러
  if (isColorType(type)) {
    const colorValue = COLOR_MAP[type];
    const paletteStyle =
      type === 'COLOR_OTHER'
        ? { backgroundImage: 'linear-gradient(180deg, #FF6164 0%, #FF9462 28.85%, #FFBE62 67.31%, #8BFF61 100%)' }
        : { backgroundColor: colorValue };
    return <span className={cx(s.colorPalette, className)} style={paletteStyle} />;
  }

  // 아무 타입에도 속하지 않는 경우 : 아무 심볼 없음!
  return null;
};

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
  type: TagType;
}

const TagOptionBtn = ({ isSelected = false, onClick, type }: Props) => {
  const label = TAG_TYPES_MAP[type];
  const rightIconClass = isSelected ? 'mgc_check_fill' : 'mgc_add_fill';

  return (
    <button className={s.Container({ isSelected })} onClick={onClick}>
      <div className={s.row}>
        <div className={s.iconLabel}>
          <Symbol type={type} className={s.SymbolStyle} />
          {label}
        </div>
        <div className={`${rightIconClass} ${s.rightIcon({ isSelected })}`} />
      </div>
    </button>
  );
};

export default TagOptionBtn;
