// 사용할 때 grid로 사용하기
import * as s from './style.css';
import { COLOR_MAP } from '@/libs/constants/colorMap';
import {
  COLOR_TYPES_MAP,
  PRODUCT_TYPES_MAP,
  POST_TYPES_MAP,
  TRADE_TYPES_MAP,
  SIZE_TYPES_ARRAY,
  QUALITY_TYPES_MAP,
  type TagType,
  type ColorType,
  type SizeType,
  type QualityType,
  TAG_TYPES_MAP,
  type IconType,
} from '@/libs/types/post';
import { TagIcon } from '@/features/post/components/TagIcon';

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
  type: TagType;
  isColorOther?: boolean;
}

export function isColorType(type: TagType): type is ColorType {
  return type in COLOR_TYPES_MAP;
}

export function isIconType(type: TagType): type is IconType {
  return (
    type in PRODUCT_TYPES_MAP || type in POST_TYPES_MAP || (type !== 'DIRECT_AND_PARCEL' && type in TRADE_TYPES_MAP)
  );
}

export function isNullType(type: TagType): type is SizeType | QualityType {
  return type in QUALITY_TYPES_MAP || SIZE_TYPES_ARRAY.includes(type as SizeType);
}

const Symbol = ({ type, isColorOther }: { type: TagType; isColorOther: boolean }) => {
  // 아이콘이면서, "기타"가 색상이 아닌 경우
  if (isIconType(type) && !isColorOther) return <TagIcon type={type} className={s.leftIcon} />;

  // 컬러
  if (isColorType(type)) {
    const colorValue = COLOR_MAP[type];
    const paletteStyle =
      type === 'OTHER'
        ? { backgroundImage: 'linear-gradient(180deg, #FF6164 0%, #FF9462 28.85%, #FFBE62 67.31%, #8BFF61 100%)' }
        : { backgroundColor: colorValue };
    return <span className={s.colorPalette} style={paletteStyle} />;
  }

  // 아무 타입에도 속하지 않는 경우 : 아무 심볼 없음!
  return null;
};

const TagOptionBtn = ({ isSelected = false, onClick, type, isColorOther = false }: Props) => {
  const label = TAG_TYPES_MAP[type];
  const rightIconClass = isSelected ? 'mgc_check_fill' : 'mgc_add_fill';

  return (
    <button className={s.Container({ isSelected })} onClick={onClick}>
      <div className={s.row}>
        <div className={s.iconLabel}>
          <Symbol type={type} isColorOther={isColorOther} />
          {label}
        </div>
        <div className={`${rightIconClass} ${s.rightIcon({ isSelected })}`} />
      </div>
    </button>
  );
};

export default TagOptionBtn;
