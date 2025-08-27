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

// TODO: 거래 완료 버튼 추가
const PickItemList = ({ data }: PickItemListProps) => {
  const isRental = data.type === 'RENTAL';
  const isSale = data.type === 'SALE';

  const currentDate = new Date(); // 현재 시간
  const tradeData = isRental ? data.returnDate : data.rentalDate; // 거래 실제 시간
  const isComplete = isBefore(tradeData, currentDate); // 거래 실제 시간이 도래했는지  ->  거래 완료 버튼 활성화

  const isSuccess = data.state === 'SUCCESS'; // 거래 실제로 완료됐는지   ->  거래 실제 시간 이후에 거래 완료 버튼을 눌렀거나, 24시간이 지났거나 (서버에서 내려줌)
  const tradeDate = parsePickDate(data.rentalDate);

  return (
    <div className={s.TradeInfo}>
      <TradeInfo isSuccess={isSuccess} date={tradeDate} />
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
