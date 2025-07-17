import * as s from './style.css';
import * as c from '../style.css';
import TypeCard from '../../TypeCard';
import Token from '@/common/components/Token';
import type { TransactionType } from '@/libs/types/item';
import { useStep1Store } from '@/features/post/stores/Step1Store';

const Step1 = () => {
  // zustand에 저장되어 있는 현재 상태 가져오기
  const store = useStep1Store(state => state.transactionTypes);

  // setter 함수 가져오기 (zustand 상태 바꾸기)
  const setter = useStep1Store(state => state.setTransactionTypes);

  const handleSelectType = (type: TransactionType) => {
    const updated = store.includes(type) ? store.filter(t => t !== type) : [...store, type];

    setter(updated); // zustand에 저장
  };

  return (
    <div className={s.Wrapper}>
      <h1 className={c.Head}>
        거래하실 종류를 선택해 주세요
        <Token>복수 선택 가능</Token>
      </h1>
      <div className={s.Container}>
        <TypeCard types="RENTAL" isSelected={store.includes('RENTAL')} onClick={() => handleSelectType('RENTAL')} />
        <TypeCard types="SALE" isSelected={store.includes('SALE')} onClick={() => handleSelectType('SALE')} />
      </div>
    </div>
  );
};

export default Step1;
