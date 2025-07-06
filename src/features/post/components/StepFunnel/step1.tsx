import { useState } from 'react';
import * as s from './style.css';
import TypeCard from '../TypeCard';
import type { PostType } from '@/libs/types/post';

const Step1 = () => {
  const [selectedTypes, setSelectedTypes] = useState<PostType[]>([]);

  const handleSelectType = (type: PostType) => {
    setSelectedTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]));
  };

  return (
    <div className={s.Wrapper}>
      <h1 className={s.Head}>거래하실 종류를 선택해 주세요</h1>
      <div className={s.Container}>
        <TypeCard types="대여" isSelected={selectedTypes.includes('RENTAL')} onClick={() => handleSelectType('RENTAL')} />
        <TypeCard types="판매" isSelected={selectedTypes.includes('SALE')} onClick={() => handleSelectType('SALE')} />
      </div>
    </div>
  );
};

export default Step1;
