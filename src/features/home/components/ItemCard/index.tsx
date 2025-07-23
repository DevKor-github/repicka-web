import { Link } from 'react-router';

import * as s from './style.css';

import type { ItemInterface } from '@/features/home/types';
import ItemTokenList from '@/common/components/ItemTokenList';

interface Props {
  data: ItemInterface;
}
const ItemCard = ({ data }: Props) => {
  const isRental = data.transactionTypes.includes('RENTAL');
  const isSale = data.transactionTypes.includes('SALE');

  return (
    <Link className={s.Container} to={`/detail/${data.itemId}`}>
      <img className={s.Image} src={data.thumbnail} aria-hidden />
      <div className={s.Info}>
        <div className={s.Header}>
          <h2 className={s.Title}>{data.title}</h2>
          <div className={s.Price}>
            {isRental && (
              <div className={s.PriceItem}>
                <label>대여</label>
                <p>{data.rentalFee.toLocaleString()}원</p>
                <p>
                  <label>보증금</label>
                  {data.deposit.toLocaleString()}원
                </p>
              </div>
            )}
            {isSale && (
              <div className={s.PriceItem}>
                <label>판매</label>
                <p>{data.salePrice.toLocaleString()}원</p>
              </div>
            )}
          </div>
        </div>
        <div className={s.Footer}>
          <div className={s.Tokens}>
            {/* TODO: API 수정 요청 */}
            <ItemTokenList
              showAll={false}
              itemInfo={{
                productTypes: data.productTypes,
                quality: 'BEST',
                size: 'L',
                tradeMethods: ['DIRECT'],
              }}
            />
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
