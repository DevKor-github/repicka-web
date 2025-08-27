import ItemTokenList from '@/common/components/ItemTokenList';
import getImageUrl from '@/common/utils/getImageUrl';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import * as s from './style.css';
import TradeInfo from '../TradeInfo';
import Btn from '../Btn';
import type { AppointmentInterface } from '../../types';
import { Link } from 'react-router';
import { parsePickDate } from '@/common/utils/parseDate';
import { isBefore } from 'date-fns';

interface PickItemListProps {
  data: AppointmentInterface;
}

const PickItemList = ({ data }: PickItemListProps) => {
  const isRental = data.type === 'RENTAL';
  const isSale = data.type === 'SALE';

  const currentDate = new Date();
  const completeData = isRental ? data.returnDate : data.rentalDate;
  const isComplete = isBefore(completeData, currentDate);
  const isSuccess = data.state === 'SUCCESS';
  const tradeDate = parsePickDate(data.rentalDate);

  return (
    <div className={s.TradeInfo}>
      <TradeInfo isComplete={isComplete} date={tradeDate} />
      <Link className={s.Container} to={`/pick-detail/${data.appointmentId}`}>
        <img className={s.Image} src={getImageUrl(data.imageUrl)} aria-hidden />

        <div className={s.Wrapper}>
          <div className={s.Heart}>
            <div className={s.Info}>
              <div className={s.Header}>
                <h2 className={s.Title}>{data.title}</h2>
                <div className={s.Price}>
                  {isRental && <PriceToken price={data.price} deposit={data.deposit} />}
                  {isSale && <PriceToken price={data.price} />}
                </div>

                <div className={s.Tokens}>
                  <ItemTokenList
                    showCount={3}
                    itemInfo={{
                      productTypes: data.productTypes,
                      transactionTypes: [data.type],
                      quality: data.quality,
                      size: data.size,
                      color: data.color,
                      tradeMethods: ['DIRECT'],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={s.Footer}>
            <Btn
              type="chat"
              appointmentId={data.appointmentId}
              nickname={data.opponentNickname}
              chatRoomId={data.chatRoomId}
            />
            {isSuccess && (
              <Btn
                type="review"
                appointmentId={data.appointmentId}
                nickname={data.opponentNickname}
                isReviewed={data.isReviewed}
                chatRoomId={data.chatRoomId}
              />
            )}
          </div>
        </div>
      </Link>
      <div className={s.Border} />
    </div>
  );
};

export default PickItemList;
