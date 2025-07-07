import Token from '@/common/components/Token';
import * as s from './style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';
import { PRODUCT_TYPES_MAP, type ProductType } from '@/libs/types/post';
import { useState } from 'react';

const Step2 = () => {
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);

  const handleSelectType = (type: ProductType) => {
    setSelectedTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]));
  };

  return (
    <div>
      <header className={s.Head}>
        제품 타입을 선택해 주세요
        <Token>복수 선택 가능</Token>
      </header>
      <div className={s.Content}>
        <div className={s.Grid}>
          {(Object.keys(PRODUCT_TYPES_MAP) as ProductType[]).map(type => (
            <TagOptionBtn
              key={type}
              type={type}
              isSelected={selectedTypes.includes(type)}
              onClick={() => handleSelectType(type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;
