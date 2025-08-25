import ItemTokenList from '@/common/components/ItemTokenList';
import getImageUrl from '@/common/utils/getImageUrl';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import * as s from './style.css';
import TradeInfo from '../TradeInfo';
import Btn from '../Btn';
import type { AppointmentInterface } from '../../types';
import { Link } from 'react-router';
import { parsePickDate } from '@/common/utils/parseDate';

interface PickItemListProps {
  data: AppointmentInterface;
}

const PickItemList = ({ data }: PickItemListProps) => {
  const isSuccess = data.state === 'SUCCESS';
  const date = parsePickDate(data.rentalDate);

  return (
    <div className={s.TradeInfo}>
      <TradeInfo isSuccess={isSuccess} date={date} />
      <Link className={s.Container} to={`/pick-detail/${data.appointmentId}`}>
        <img className={s.Image} src={getImageUrl(data.imageUrl)} aria-hidden />

        <div className={s.Wrapper}>
          <div className={s.Heart}>
            <div className={s.Info}>
              <div className={s.Header}>
                <h2 className={s.Title}>{data.title}</h2>
                <div className={s.Price}>
                  {data.type === 'RENTAL' && <PriceToken price={data.price} deposit={data.deposit} />}
                  {data.type === 'SALE' && <PriceToken price={data.price} />}
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
                isComplete={data.isReviewed}
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
