import Chip from '@/common/components/Chip';
import * as c from '../style.css';
import { TRADE_METHODS_MAP, type TradeMethods } from '@/libs/types/item';
import Token from '@/common/components/Token';
import InputField from '../../InputField';
import { useStep3Store } from '@/features/post/stores/Step3Store';

const Step3 = () => {
  const tradeMethodStore = useStep3Store(state => state.tradeMethods);
  const tradeMethodSetter = useStep3Store(state => state.setTradeMethods);

  const handleSelectType = (type: TradeMethods) => {
    const updated = tradeMethodStore.includes(type)
      ? tradeMethodStore.filter(t => t !== type)
      : [...tradeMethodStore, type];

    tradeMethodSetter(updated);
  };

  const locationStore = useStep3Store(state => state.location);
  const locationSetter = useStep3Store(state => state.setLocation);

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
            {(Object.keys(TRADE_METHODS_MAP) as TradeMethods[]).map(key => (
              <Chip key={key} isSelected={tradeMethodStore.includes(key)} onClick={() => handleSelectType(key)}>
                {TRADE_METHODS_MAP[key]}
              </Chip>
            ))}
          </div>
        </div>
        <div className={c.DetailContent}>
          <div className={c.DetailContent}>
            <span>직거래 장소를 입력해 주세요</span>
            <InputField value={locationStore} setValue={locationSetter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
