import * as s from './style.css';

interface Props {
  price: number;
  deposit?: number;
}
const PriceToken = ({ price, deposit }: Props) => {
  const isRental = deposit !== undefined;
  return (
    <div className={s.PriceItem}>
      <label>{isRental ? '대여' : '판매'}</label>
      <p>{price.toLocaleString()}원</p>
      {isRental && (
        <p>
          <label>보증금</label>
          {deposit.toLocaleString()}원
        </p>
      )}
    </div>
  );
};
export default PriceToken;
