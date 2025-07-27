import Token from '@/common/components/Token';
import * as s from './style.css';
import * as c from '../style.css';
import InputField from '../../InputField';
import CheckBtn from '../../CheckBtn';
import { useStep6Store } from '@/features/post/stores/Step6Store';
import { useStep1Store } from '@/features/post/stores/Step1Store';
import AlertText from '../../AlertText';

const Rental = () => {
  const rentalFeeStore = useStep6Store(state => state.rentalFee);
  const rentalFeeSetter = useStep6Store(state => state.setRentalFee);

  const depositStore = useStep6Store(state => state.deposit);
  const depositSetter = useStep6Store(state => state.setDeposit);

  return (
    <div className={s.PriceTypeContent}>
      <Token>대여</Token>
      <div className={s.PriceDesc}>
        <div className={c.DetailContent}>
          <span>대여료를 입력해 주세요</span>
          <div className={s.PriceInputField}>
            <InputField className={s.CustomInputField} value={rentalFeeStore} setValue={rentalFeeSetter} />원
          </div>
        </div>
        <div className={c.DetailContent}>
          <span>보증금을 입력해 주세요</span>
          <div className={s.PriceInputField}>
            <InputField className={s.CustomInputField} value={depositStore} setValue={depositSetter} />원
          </div>
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const priceStore = useStep6Store(state => state.salePrice);
  const priceSetter = useStep6Store(state => state.setSalePrice);

  return (
    <div className={s.PriceTypeContent}>
      <Token>판매</Token>
      <div className={s.PriceDesc}>
        <div className={c.DetailContent}>
          <span>판매 금액을 입력해 주세요</span>
          <div className={s.PriceInputField}>
            <InputField className={s.CustomInputField} value={priceStore} setValue={priceSetter} />원
          </div>
        </div>
      </div>
    </div>
  );
};

const Step6 = () => {
  const store = useStep1Store(state => state.transactionTypes);
  const isRental = store.includes('RENTAL');
  const isSale = store.includes('SALE');
  const canDealStore = useStep6Store(state => state.canDeal);
  const canDealSetter = useStep6Store(state => state.setCanDeal);

  const priceType = isSale && isRental ? '대여료/보증금/판매금액' : isSale ? '판매금액' : '대여료/보증금';

  const handleCanDeal = () => {
    const updated = !canDealStore;

    canDealSetter(updated);
  };

  return (
    <div>
      <div className={s.Alert}>
        <header className={c.Head}>가격을 설정해 주세요</header>
        <AlertText>{priceType}은 최대 100만 원 미만으로 설정 가능합니다.</AlertText>
      </div>
      <div className={c.Content}>
        {isRental && <Rental />}
        {isSale && <Sale />}
        <span className={s.CanDeal} onClick={handleCanDeal}>
          네고 제안 받을래요
          <CheckBtn isSelected={canDealStore} />
        </span>
      </div>
    </div>
  );
};
export default Step6;
