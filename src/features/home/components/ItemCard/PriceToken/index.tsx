import * as s from './style.css';

interface Props {
  price: number;
  deposit?: number;
}
const PriceToken = ({ price, deposit }: Props) => {
  const isRental = deposit !== undefined;
  return (
    <div className={s.Wrapper}>
      <div className={s.PriceItem}>
        <label>{isRental ? '대여료' : '판매가'}</label>
        <p>{price.toLocaleString()}원</p>
      </div>
      {isRental && (
        <div className={s.PriceItem}>
          <label>보증금</label>
          <p>{deposit.toLocaleString()}원</p>
        </div>
      )}
    </div>
  );
};
export default PriceToken;
