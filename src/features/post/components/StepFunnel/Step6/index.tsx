// TODO: 판매인지, 대여인지, 판매 및 대여인지 구분
// TODO: 각 인풋에 서로 다른 상태값 부여

import Token from '@/common/components/Token';
import * as s from './style.css';
import * as c from '../style.css';
import InputField from '../../InputField';
import CheckBtn from '../../CheckBtn';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Rental = () => {
  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>대여</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>대여료를 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField isPrice={true} width="9.375rem" />원
            </div>
          </div>
          <div className={c.DetailContent}>
            <span>보증금을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField isPrice={true} width="9.375rem" />원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const store = usePostWriteStore(state => state.item.canDeal);
  const setter = usePostWriteStore(state => state.setCanDeal);

  const handleCanDeal = () => {
    const updated = !store;

    setter(updated);
  };

  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>판매</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>판매 금액을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField isPrice={true} width="9.375rem" />원
            </div>
          </div>
          <span className={s.CanDeal} onClick={handleCanDeal}>
            네고 제안 받을래요
            <CheckBtn isSelected={store} />
          </span>
        </div>
      </div>
    </div>
  );
};

const Step6 = () => {
  let isRental;
  let isSale;

  const store = usePostWriteStore(state => state.postTypes);

  if (store.includes('RENTAL')) isRental = true;
  if (store.includes('SALE')) isSale = true;

  return (
    <div>
      <header className={c.Head}>가격을 설정해 주세요</header>
      <div className={c.Content}>
        {isRental && <Rental />}
        {isSale && <Sale />}
      </div>
    </div>
  );
};
export default Step6;
