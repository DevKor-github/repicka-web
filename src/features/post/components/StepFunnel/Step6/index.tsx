import Token from '@/common/components/Token';
import * as s from './style.css';
import * as c from '../style.css';
import InputField from '../../InputField';
import CheckBtn from '../../CheckBtn';
import { useRentalStore, useSaleStore } from '@/features/post/stores/Step6Store';

interface Props {
  isRental: boolean;
  isSale: boolean;
}

const Rental = () => {
  const rentalFeeStore = useRentalStore(state => state.rentalFee);
  const rentalFeeSetter = useRentalStore(state => state.setRentalFee);

  const depositStore = useRentalStore(state => state.deposit);
  const depositSetter = useRentalStore(state => state.setDeposit);

  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>대여</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>대여료를 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField width="9.375rem" value={rentalFeeStore} setValue={rentalFeeSetter} />원
            </div>
          </div>
          <div className={c.DetailContent}>
            <span>보증금을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField width="9.375rem" value={depositStore} setValue={depositSetter} />원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const canDealStore = useSaleStore(state => state.canDeal);
  const canDealSetter = useSaleStore(state => state.setCanDeal);

  const priceStore = useSaleStore(state => state.salePrice);
  const priceSetter = useSaleStore(state => state.setSalePrice);

  const handleCanDeal = () => {
    const updated = !canDealStore;

    canDealSetter(updated);
  };

  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>판매</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>판매 금액을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField width="9.375rem" value={priceStore} setValue={priceSetter} />원
            </div>
          </div>
          <span className={s.CanDeal} onClick={handleCanDeal}>
            네고 제안 받을래요
            <CheckBtn isSelected={canDealStore} />
          </span>
        </div>
      </div>
    </div>
  );
};

const Step6 = ({ isRental, isSale }: Props) => {
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
