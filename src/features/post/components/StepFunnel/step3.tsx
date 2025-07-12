import Chip from '@/common/components/Chip';
import * as s from './style.css';
import { TRADE_TYPES_MAP, type TradeType } from '@/libs/types/item';
import Token from '@/common/components/Token';
import InputField from '../InputField';
import { useState } from 'react';

const Step3 = () => {
  const [selectedTypes, setSelectedTypes] = useState<TradeType[]>([]);

  const handleSelectType = (type: TradeType) => {
    setSelectedTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]));
  };

  return (
    <div>
      <header className={s.Head}>거래 방식을 선택해 주세요</header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          <div className={s.ContentHeader}>
            거래 방식을 선택해 주세요
            <Token>복수 선택 가능</Token>
          </div>
          <div className={s.ChipColumn}>
            {(Object.keys(TRADE_TYPES_MAP) as TradeType[]).map(type => (
              <Chip key={type} isSelected={selectedTypes.includes(type)} onClick={() => handleSelectType(type)}>
                {TRADE_TYPES_MAP[type]}
              </Chip>
            ))}
          </div>
        </div>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            <span>직거래 장소를 입력해 주세요</span>
            <InputField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
