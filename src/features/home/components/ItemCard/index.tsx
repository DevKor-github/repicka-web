import { Link } from 'react-router';

import * as s from './style.css';

import { PRODUCT_TYPES_MAP } from '@/libs/types/item';
import type { ItemInterface } from '@/features/home/types';
import Token from '@/common/components/Token';

interface Props {
  data: ItemInterface;
}
const ItemCard = ({ data }: Props) => {
  return (
    <Link className={s.Container} to={`/detail/${data.itemId}`}>
      <img className={s.Image} src={data.thumbnail} aria-hidden />
      <div className={s.Info}>
        <div className={s.Header}>
          <h2 className={s.Title}>{data.title}</h2>
          <div className={s.Price}>
            <div className={s.PriceItem}>
              <label>대여료</label>
              <p>{data.rentalFee.toLocaleString()}원</p>
            </div>
            <div className={s.PriceItem}>
              <label>보증금</label>
              <p>{data.deposit.toLocaleString()}원</p>
            </div>
          </div>
        </div>
        <div className={s.Footer}>
          <div className={s.Tokens}>
            {data.productTypes.map((type, index) => (
              <Token key={`${type}-${index}`}>{PRODUCT_TYPES_MAP[type]}</Token>
            ))}
          </div>
          <div className={s.Interactions}>
            <div className={s.InteractionItem}>
              <span className="mgc_heart_fill" />
              <p>{data.likeCount}</p>
            </div>
            <div className={s.InteractionItem}>
              <span className="mgc_chat_2_fill" />
              <p>{data.chatRoomCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
