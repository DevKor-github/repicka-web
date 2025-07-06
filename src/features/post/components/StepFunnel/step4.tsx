import Chip from '@/common/components/Chip';
import * as s from './style.css';
import {
  COLOR_TYPES_MAP,
  QUALITY_TYPES_MAP,
  SIZE_TYPES_MAP,
  type ColorType,
  type QualityType,
  type SizeType,
} from '@/libs/types/post';
import { useState } from 'react';

const Step4 = () => {
  const [selectedSizes, setSelectedSizes] = useState<SizeType | null>(null);
  const [selectedColors, setSelectedColors] = useState<ColorType | null>(null);
  const [selectedQualities, setSelectedQualities] = useState<QualityType | null>(null);
  
  const renderChipGroup = <T extends string>(
    map: Record<T, string>,
    selected: T | null,
    setSelected: React.Dispatch<React.SetStateAction<T | null>>
  ) => (
    <div className={s.ChipColumn}>
      {(Object.keys(map) as T[]).map((key) => (
        <Chip
          key={key}
          isSelected={selected === key}
          onClick={() => setSelected(selected === key ? null : key)
          }
        >
          {map[key]}
        </Chip>
      ))}
    </div>
  );

  return (
    <div>
      <header className={s.Head}>태그를 선택해 주세요</header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          사이즈를 선택해 주세요
          {renderChipGroup(SIZE_TYPES_MAP, selectedSizes, setSelectedSizes)}
        </div>
        <div className={s.DetailContent}>
          색상을 선택해 주세요
          {renderChipGroup(COLOR_TYPES_MAP, selectedColors, setSelectedColors)}
        </div>
        <div className={s.DetailContent}>
          품질을 선택해 주세요
          {renderChipGroup(QUALITY_TYPES_MAP, selectedQualities, setSelectedQualities)}
        </div>
      </div>
    </div>
  );
};

export default Step4;
