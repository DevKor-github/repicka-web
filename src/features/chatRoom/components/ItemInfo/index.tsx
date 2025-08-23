import { cx } from '@styled-system/css';
import * as s from './style.css';
import type { ItemInterface } from '../../types';
import getImageUrl from '@/common/utils/getImageUrl';
import { Link } from 'react-router';

interface Props {
  data: ItemInterface;
}

const ItemInfo = ({ data }: Props) => {
  const isRental = data.transactionTypes.includes('RENTAL');
  const isSale = data.transactionTypes.includes('SALE');

  const Rental = () => {
    return (
      <div className={s.PriceContainer}>
        <div className={s.Price}>
          <span>대여료</span>
          <p>{data.rentalFee}원</p>
        </div>
        <div className={s.Price}>
          <span>보증금</span>
          <p>{data.deposit}원</p>
        </div>
      </div>
    );
  };

  const Sale = () => {
    return (
      <div className={s.Price}>
        <span>판매가</span>
        <p>{data.salePrice}원</p>
      </div>
    );
  };

  return (
    <Link className={s.Container} to={`/detail/${data.itemId}`}>
      <img className={s.Thumbnail} src={getImageUrl(data.thumbnail)} />
      <div className={s.Info}>
        <span>{data.title}</span>
        {isRental && <Sale />}
        {isSale && <Rental />}
      </div>
      <div className={cx('mgc_right_line', s.Icon)} />
    </Link>
  );
};

export default ItemInfo;
