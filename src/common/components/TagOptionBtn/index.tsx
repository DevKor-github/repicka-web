// 사용할 때 grid로 사용하기

import type { PropsWithChildren } from 'react';
import * as s from './style.css';
import colorMap from '@/libs/constants/colorMap';
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

interface Props extends PropsWithChildren {
  isSelected?: boolean;
  onClick?: () => void;
  type: TagType;
  isColorGroup?: boolean;
}

export function isColorType(type: TagType): type is ColorType {
  return type in COLOR_TYPES_MAP;
}

export function isIconType(type: TagType): type is IconType {
  return (
    type in PRODUCT_TYPES_MAP ||
    type in POST_TYPES_MAP ||
    (type !== 'DIRECT_AND_PARCEL' && type in TRADE_TYPES_MAP)
  );
}

export function isNullType(type: TagType): type is SizeType | QualityType {
  return type in QUALITY_TYPES_MAP || SIZE_TYPES_ARRAY.includes(type as SizeType);
}

const TagOptionBtn = ({isSelected = false, onClick, type, isColorGroup = false }: Props) => {
  const label = TAG_TYPES_MAP[type];

  const isIcon = isIconType(type) && !isColorGroup; // 
  const isColor = isColorType(type);

  const rightIconClass = isSelected ? 'mgc_check_fill' : 'mgc_add_fill';

  const colorValue = colorMap[label];
  const isGradient = label === '기타';

  const paletteStyle = isGradient // 동적으로 바꿔줘야 함
    ? { backgroundImage: 'linear-gradient(180deg, #FF6164 0%, #FF9462 28.85%, #FFBE62 67.31%, #8BFF61 100%)' }
    : { backgroundColor: colorValue };

  return (
    <button className={s.Container({ isSelected })} onClick={onClick}>
      <div className={s.row}>
        <div className={s.iconLabel}>
          {isIcon && <TagIcon type={type} className={s.leftIcon}></TagIcon>}
          {!isIcon && isColor && <span className={s.colorPalette} style={paletteStyle} />}
          {label}
        </div>
        <div className={`${rightIconClass} ${s.rightIcon({ isSelected })}`} />
      </div>
    </button>
  );
};

export default TagOptionBtn;
