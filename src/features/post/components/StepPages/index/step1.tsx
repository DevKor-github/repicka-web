import { useState } from 'react';
import * as s from '../style.css';
import TypeCard from '../../TypeCard';

const Step1 = () => {
  const [selectedTypes, setSelectedTypes] = useState<('대여' | '판매')[]>([]);

  const handleSelectType = (type: '대여' | '판매') => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className={s.Wrapper}>
      <h1 className={s.Head}>거래하실 종류를 선택해 주세요</h1>
      <div className={s.Container}>
        <TypeCard
          types='대여'
          isSelected={selectedTypes.includes('대여')}
          onClick={() => handleSelectType('대여')}
        />
        <TypeCard
          types='판매'
          isSelected={selectedTypes.includes('판매')}
          onClick={() => handleSelectType('판매')}
        />
      </div>
    </div>
  );
};

export default Step1;
