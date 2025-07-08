import Chip from '@/common/components/Chip';
import * as c from '../style.css';
import { TRADE_TYPES_MAP, type TradeType } from '@/libs/types/post';
import Token from '@/common/components/Token';
import InputField from '../../InputField';
import { useState } from 'react';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Step3 = () => {
  const [selectedTypes, setSelectedTypes] = useState<TradeType[]>([]);

  const handleSelectType = (type: TradeType) => {
    setSelectedTypes(prev => (prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]));
  };

  // TODO: 배열로 고쳐주면 고칠 거임

  // const tradeMethodStore = usePostWriteStore(state => state.item.tradeMethod);
  // const tradeMethodSetter = usePostWriteStore(state => state.setTradeMethod);

  // const handleSelectType = (type: TradeType) => {
  //   const updated = store.includes(type)
  //     ? store.filter(t => t !== type)
  //     : [...store, type]

  //     setter(updated);
  // }

  const locationStore = usePostWriteStore(state => state.item.location);
  const locationSetter = usePostWriteStore(state => state.setLocation);

  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = e.target.value;

    locationSetter(updated);
  };

  return (
    <div>
      <header className={c.Head}>거래 방식을 선택해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          <div className={c.ContentHead}>
            거래 방식을 선택해 주세요
            <Token>복수 선택 가능</Token>
          </div>
          <div className={c.ChipContainer}>
            {(Object.entries(TRADE_TYPES_MAP) as [TradeType, string][])
              .filter(([key]) => key !== 'DIRECT_AND_PARCEL')
              .map(([key, label]) => (
                <Chip key={key} isSelected={selectedTypes.includes(key)} onClick={() => handleSelectType(key)}>
                  {label}
                </Chip>
              ))}
          </div>
        </div>
        <div className={c.DetailContent}>
          <div className={c.DetailContent}>
            <span>직거래 장소를 입력해 주세요</span>
            <InputField value={locationStore} onChange={handleLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
