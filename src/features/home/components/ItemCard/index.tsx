import { Link } from 'react-router';

import * as s from './style.css';

import type { ItemInterface } from '@/features/home/types';
import ItemTokenList from '@/common/components/ItemTokenList';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import getImageUrl from '@/common/utils/getImageUrl';

interface Props {
  data: ItemInterface;
}
const ItemCard = ({ data }: Props) => {
  const isRental = data.transactionTypes.includes('RENTAL');
  const isSale = data.transactionTypes.includes('SALE');

  return (
    <Link className={s.Container} to={`/detail/${data.itemId}`}>
      <img className={s.Image} src={getImageUrl(data.thumbnail)} aria-hidden />
      <div className={s.Info}>
        <div className={s.Header}>
          <h2 className={s.Title}>{data.title}</h2>
          <div className={s.Price}>
            {isRental && <PriceToken price={data.rentalFee} deposit={data.deposit} />}
            {isSale && <PriceToken price={data.salePrice} />}
          </div>
        </div>
        <div className={s.Footer}>
          <div className={s.Tokens}>
            <ItemTokenList
              showAll={false}
              itemInfo={{
                productTypes: data.productTypes,
                quality: data.quality,
                size: data.size,
                color: data.color,
                tradeMethods: data.tradeMethods,
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
