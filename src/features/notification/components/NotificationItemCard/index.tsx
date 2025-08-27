import ItemTokenList from '@/common/components/ItemTokenList';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import { Link } from 'react-router';
import * as s from './style.css';
import getImageUrl from '@/common/utils/getImageUrl';
import { cx } from '@styled-system/css';
import type { NotificationInterface } from '../../types';
import { parsePickDate, parsePickTime } from '@/common/utils/parseDate';

interface Props {
  data: NotificationInterface;
}

const NotificationItemCard = ({ data }: Props) => {
  const isRental = data.item.transactionTypes.includes('RENTAL');
  const isSale = data.item.transactionTypes.includes('SALE');
  const type = data.type;
  const isRemind = type === 'APPOINTMENT_RENTAL_REMIND' || type === 'APPOINTMENT_RETURN_REMIND';
  const remindDate = type === 'APPOINTMENT_RENTAL_REMIND' ? data.rentalDate : data.returnDate;

  const label = (() => {
    if (type === 'APPOINTMENT_CANCEL') return '나의 Pick이 취소됐어요.';
    if (type === 'APPOINTMENT_EXPIRE') return '나의 Pick 요청이 만료됐어요.';
    if (type === 'APPOINTMENT_PROPOSAL') return 'Pick 요청을 받았어요.';
    if (type === 'APPOINTMENT_REJECT') return '나의 Pick 요청이 거절됐어요.';
    if (type === 'APPOINTMENT_RENTAL_REMIND') return '오늘은 아래 상품의 거래 날이에요!';
    if (type === 'APPOINTMENT_RETURN_REMIND') return '오늘은 아래 상품의 거래 날이에요!';
    if (type === 'APPOINTMENT_CONFIRM') return '나의 Pick이 확정됐어요.';
  })();

  const icon = (() => {
    if (type === 'APPOINTMENT_CANCEL') return 'mgc_sob_fill';
    if (type === 'APPOINTMENT_EXPIRE') return 'mgc_sob_fill';
    if (type === 'APPOINTMENT_PROPOSAL') return 'mgc_emoji_fill';
    if (type === 'APPOINTMENT_REJECT') return 'mgc_sob_fill';
    if (type === 'APPOINTMENT_RENTAL_REMIND') return 'mgc_t_shirt_fill';
    if (type === 'APPOINTMENT_RETURN_REMIND') return 'mgc_t_shirt_fill';
    if (type === 'APPOINTMENT_CONFIRM') return 'mgc_emoji_fill';
  })();

  return (
    <div className={s.Wrapper({ isRemind })}>
      <div className={s.RemindTime}>
        <div className={s.Type}>
          <div className={cx(`${icon}`, s.Icon({ icon }))} />
          <div className={s.Label}>{label}</div>
        </div>
        {isRemind && (
          <div className={s.Date}>
            <h1>{parsePickDate(remindDate)}</h1>
            <h1>{parsePickTime(remindDate)}</h1>
          </div>
        )}
      </div>
      <Link className={s.Container} to={`/pick-detail/${data.appointmentId}`}>
        <img className={s.Image} src={getImageUrl(data.item.thumbnail)} aria-hidden />
        <div className={s.Info}>
          <div className={s.Header}>
            <h2 className={s.Title}>{data.item.title}</h2>
            <div className={s.Price}>
              {isRental && <PriceToken price={data.item.rentalFee} deposit={data.item.deposit} />}
              {isSale && <PriceToken price={data.item.salePrice} />}
            </div>
          </div>
          <div className={s.Footer}>
            <div className={s.Tokens}>
              <ItemTokenList
                showCount={3}
                itemInfo={{
                  productTypes: data.item.productTypes,
                  quality: data.item.quality,
                  size: data.item.size,
                  color: data.item.color,
                  tradeMethods: data.item.tradeMethods,
                }}
              />
            </div>
            <div className={s.Interactions}>
              <div className={s.InteractionItem}>
                <span className="mgc_heart_fill" />
                <p>{data.item.likeCount}</p>
              </div>
              <div className={s.InteractionItem}>
                <span className="mgc_chat_2_fill" />
                <p>{data.item.chatRoomCount}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationItemCard;
