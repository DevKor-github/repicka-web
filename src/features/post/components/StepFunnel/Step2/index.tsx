import Token from '@/common/components/Token';
import * as s from './style.css';
import * as c from '../style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';
import { PRODUCT_TYPES_MAP, type ProductType } from '@/libs/types/item';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Step2 = () => {
  const store = usePostWriteStore(state => state.item.productTypes);
  const setter = usePostWriteStore(state => state.setProductTypes);

  const handleSelectType = (type: ProductType) => {
    const updated = store.includes(type) ? store.filter(t => t !== type) : [...store, type];

    setter(updated);
  };

  return (
    <div>
      <header className={c.Head}>
        제품 타입을 선택해 주세요
        <Token>복수 선택 가능</Token>
      </header>
      <div className={c.Content}>
        <div className={s.Grid}>
          {(Object.keys(PRODUCT_TYPES_MAP) as ProductType[]).map(type => (
            <TagOptionBtn
              key={type}
              type={type}
              isSelected={store.includes(type)}
              onClick={() => handleSelectType(type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;
