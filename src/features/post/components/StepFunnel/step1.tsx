import { useState } from 'react';
import * as s from './style.css';
import TypeCard from '../TypeCard';
import type { PostType } from '@/libs/types/post';
import Token from '@/common/components/Token';

const Step1 = () => {
  const [selectedTypes, setSelectedTypes] = useState<PostType[]>([]);

  const handleSelectType = (type: PostType) => {
    setSelectedTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]));
  };

  return (
    <div className={s.Wrapper}>
      <h1 className={s.Head}>
        거래하실 종류를 선택해 주세요
        <Token>복수 선택 가능</Token>
      </h1>
      <div className={s.Container}>
        <TypeCard
          types="RENTAL"
          isSelected={selectedTypes.includes('RENTAL')}
          onClick={() => handleSelectType('RENTAL')}
        />
        <TypeCard types="SALE"
          isSelected={selectedTypes.includes('SALE')}
          onClick={() => handleSelectType('SALE')}
        />
      </div>
    </div>
  );
};

export default Step1;
