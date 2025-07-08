import Chip from '@/common/components/Chip';
import * as c from '../style.css';

import {
  COLOR_TYPES_MAP,
  QUALITY_TYPES_MAP,
  SIZE_TYPES_MAP,
  type ColorType,
  type QualityType,
  type SizeType,
} from '@/libs/types/post';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const renderChipGroup = <T extends string>(map: Record<T, string>, store: T | null, setter: (type: T) => void) => (
  <div className={c.ChipContainer}>
    {(Object.keys(map) as T[]).map(type => (
      <Chip key={type} isSelected={store?.includes(type)} onClick={() => setter(type)}>
        {map[type]}
      </Chip>
    ))}
  </div>
);

const handleSelectType = <T extends string>(setter: (value: T) => void) => {
  return (type: T) => setter(type);
};

const Step4 = () => {
  const sizeStore = usePostWriteStore(state => state.item.size);
  const sizeSetter = usePostWriteStore(state => state.setSizeType);
  const handleSelectSizeType = handleSelectType<SizeType>(sizeSetter);

  const colorStore = usePostWriteStore(state => state.item.color);
  const colorSetter = usePostWriteStore(state => state.setColorType);
  const handleSelectColorType = handleSelectType<ColorType>(colorSetter);

  const qualityStore = usePostWriteStore(state => state.item.quality);
  const qualitySetter = usePostWriteStore(state => state.setQuality);
  const handleSelectQualityType = handleSelectType<QualityType>(qualitySetter);

  return (
    <div>
      <header className={c.Head}>태그를 선택해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          사이즈를 선택해 주세요
          {renderChipGroup(SIZE_TYPES_MAP, sizeStore, handleSelectSizeType)}
        </div>
        <div className={c.DetailContent}>
          색상을 선택해 주세요
          {renderChipGroup(COLOR_TYPES_MAP, colorStore, handleSelectColorType)}
        </div>
        <div className={c.DetailContent}>
          품질을 선택해 주세요
          {renderChipGroup(QUALITY_TYPES_MAP, qualityStore, handleSelectQualityType)}
        </div>
      </div>
    </div>
  );
};

export default Step4;
