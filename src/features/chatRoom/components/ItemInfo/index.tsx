import { cx } from '@styled-system/css';
import * as s from './style.css';
import type { ItemInterface } from '../../types';
import getImageUrl from '@/common/utils/getImageUrl';
import { useNavigate } from 'react-router';
import { useToast } from '@/common/hooks/useToast';

interface Props {
  data: ItemInterface;
}

const ItemInfo = ({ data }: Props) => {
  const navigate = useNavigate();
  const { openToast } = useToast();
  const isRental = data.transactionTypes.includes('RENTAL');
  const isSale = data.transactionTypes.includes('SALE');
  const isDeleted = data.isDeleted;

  const Rental = () => {
    return (
      <div className={s.PriceContainer}>
        <div className={s.Price}>
          <span>대여료</span>
          <p>{data.rentalFee.toLocaleString()}원</p>
        </div>
        <div className={s.Price}>
          <span>보증금</span>
          <p>{data.deposit.toLocaleString()}원</p>
        </div>
      </div>
    );
  };

  const Sale = () => {
    return (
      <div className={s.Price}>
        <span>판매가</span>
        <p>{data.salePrice.toLocaleString()}원</p>
      </div>
    );
  };

  const onClick = () => {
    if (isDeleted) {
      openToast({ message: '삭제된 게시글입니다.' });
      return;
    }
    navigate(`/detail/${data.itemId}`);
  };

  return (
    <button className={s.Container} onClick={onClick}>
      <div className={s.Deleted({ isDeleted })}>
        <img className={s.Thumbnail} src={getImageUrl(data.thumbnail)} />
        <div className={s.Info}>
          <span>{data.title}</span>
          {isSale && <Sale />}
          {isRental && <Rental />}
        </div>
      </div>
      <div className={cx('mgc_right_line', s.Icon)} />
    </button>
  );
};

export default ItemInfo;
