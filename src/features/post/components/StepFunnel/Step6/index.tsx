import Token from '@/common/components/Token';
import * as s from './style.css';
import * as c from '../style.css';
import InputField from '../../InputField';
import CheckBtn from '../../CheckBtn';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Rental = () => {
  const rentalFeeStore = usePostWriteStore(state => state.rentalFee);
  const rentalFeeSetter = usePostWriteStore(state => state.setRentalFee);

  const handleRentalFee = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = Number(e.target.value.replace(/,/g, ''));

    rentalFeeSetter(updated);
  };

  const depositStore = usePostWriteStore(state => state.deposit);
  const depositSetter = usePostWriteStore(state => state.setDeposit);

  const handleDeposit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = Number(e.target.value.replace(/,/g, ''));

    depositSetter(updated);
  };

  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>대여</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>대여료를 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField
                isPrice={true}
                width="9.375rem"
                value={rentalFeeStore.toString()}
                onChange={handleRentalFee}
              />
              원
            </div>
          </div>
          <div className={c.DetailContent}>
            <span>보증금을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField isPrice={true} width="9.375rem" value={depositStore.toString()} onChange={handleDeposit} />원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const canDealStore = usePostWriteStore(state => state.item.canDeal);
  const canDealSetter = usePostWriteStore(state => state.setCanDeal);

  const priceStore = usePostWriteStore(state => state.salePrice);
  const priceSetter = usePostWriteStore(state => state.setSalePrice);

  const handleCanDeal = () => {
    const updated = !canDealStore;

    canDealSetter(updated);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = Number(e.target.value.replace(/,/g, ''));

    priceSetter(updated);
  };

  return (
    <div className={s.PriceContent}>
      <div className={s.PriceTypeContent}>
        <Token>판매</Token>
        <div className={s.PriceDesc}>
          <div className={c.DetailContent}>
            <span>판매 금액을 입력해 주세요</span>
            <div className={s.PriceInputField}>
              <InputField isPrice={true} width="9.375rem" value={priceStore.toString()} onChange={handlePrice} />원
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

const Step6 = () => {
  const store = usePostWriteStore(state => state.postTypes);
  const isRental = store.includes('RENTAL');
  const isSale = store.includes('SALE');

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
