import Chip from '@/common/components/Chip';
import * as s from './style.css';
import { COLOR_TYPES_MAP, QUALITY_TYPES_MAP, SIZE_TYPES_MAP } from '@/libs/types/post';

const Step4 = () => {
  return (
    <div>
      <header className={s.Head}>
        태그를 선택해 주세요
      </header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          사이즈를 선택해 주세요
          <div className={s.ChipColumn}>
            {Object.entries(SIZE_TYPES_MAP).map(([key, label]) => (
              <Chip key={key}>{label}</Chip>
            ))}
          </div>
        </div>
        <div className={s.DetailContent}>
          색상을 선택해 주세요
          <div className={s.ChipColumn}>
            {Object.entries(COLOR_TYPES_MAP).map(([key, label]) => (
              <Chip key={key}>{label}</Chip>
            ))}
          </div>
        </div>
        <div className={s.DetailContent}>
          품질을 선택해 주세요
          <div className={s.ChipColumn}>
            {Object.entries(QUALITY_TYPES_MAP).map(([key, label]) => (
              <Chip key={key}>{label}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>);

};

export default Step4;
