import Chip from '@/common/components/Chip';
import * as c from '../style.css';

import { COLOR_MAP, QUALITY_MAP, SIZE_MAP } from '@/libs/types/item';
import { useStep4Store } from '@/features/post/stores/Step4Store';

const renderChipGroup = <T extends string>(map: Record<T, string>, store: T | null, setter: (type: T) => void) => (
  <div className={c.ChipContainer}>
    {(Object.keys(map) as T[]).map(type => (
      <Chip key={type} isSelected={store === type} onClick={() => setter(type)}>
        {map[type]}
      </Chip>
    ))}
  </div>
);

const handleSelectType = <T extends string>(setter: (value: T) => void) => {
  return (type: T) => setter(type);
};

const Step4 = () => {
  const sizeStore = useStep4Store(state => state.size);
  const sizeSetter = useStep4Store(state => state.setSize);
  const handleSelectSizeType = handleSelectType(sizeSetter);

  const colorStore = useStep4Store(state => state.color);
  const colorSetter = useStep4Store(state => state.setColor);
  const handleSelectColorType = handleSelectType(colorSetter);

  const qualityStore = useStep4Store(state => state.quality);
  const qualitySetter = useStep4Store(state => state.setQuality);
  const handleSelectQualityType = handleSelectType(qualitySetter);

  return (
    <div>
      <header className={c.Head}>태그를 선택해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          사이즈를 선택해 주세요
          {renderChipGroup(SIZE_MAP, sizeStore, handleSelectSizeType)}
        </div>
        <div className={c.DetailContent}>
          색상을 선택해 주세요
          {renderChipGroup(COLOR_MAP, colorStore, handleSelectColorType)}
        </div>
        <div className={c.DetailContent}>
          품질을 선택해 주세요
          {renderChipGroup(QUALITY_MAP, qualityStore, handleSelectQualityType)}
        </div>
      </div>
    </div>
  );
};

export default Step4;
