import type { TradeMethods, TransactionType } from '@/libs/types/item.ts';

import * as s from './style.css.ts';
import DateTimeButton from '@/features/pick/components/DateTimeBox/DateTimeButton.tsx';

const RENTAL_START_LABEL = '대여 일시를 입력해 주세요';
const RENTAL_END_LABEL = '반납 일시를 입력해주세요';
const SALE_DIRECT_LABEL = '거래를 원하는 일시를 입력해 주세요';
const SALE_PARCEL_LABEL = '희망 택배 발송 일자를 입력해주세요';

interface Props {
  transactionType: TransactionType;
  tradeMethod: TradeMethods;
  startDateTime: Date;
  endDateTime: Date;
  setStartDateTime: (date: Date) => void;
  setEndDateTime: (date: Date) => void;
}
const DateTimeBox = ({
  transactionType,
  tradeMethod,
  startDateTime,
  endDateTime,
  setStartDateTime,
  setEndDateTime,
}: Props) => {
  const isRental = transactionType === 'RENTAL';
  const isDirect = tradeMethod === 'DIRECT';
  return (
    <div className={s.Container({ isDirect })}>
      {isDirect ? (
        <DateTimeButton
          transactionType={transactionType}
          label={isRental ? RENTAL_START_LABEL : SALE_DIRECT_LABEL}
          canSelectTime
          dateTime={startDateTime}
          setDateTime={setStartDateTime}
        />
      ) : (
        <DateTimeButton
          transactionType={transactionType}
          label={isRental ? RENTAL_START_LABEL : SALE_PARCEL_LABEL}
          dateTime={startDateTime}
          setDateTime={setStartDateTime}
        />
      )}
      {isRental &&
        (isDirect ? (
          <DateTimeButton
            transactionType={transactionType}
            label={RENTAL_END_LABEL}
            canSelectTime
            dateTime={endDateTime}
            setDateTime={setEndDateTime}
          />
        ) : (
          <DateTimeButton
            transactionType={transactionType}
            label={RENTAL_END_LABEL}
            dateTime={endDateTime}
            setDateTime={setEndDateTime}
          />
        ))}
    </div>
  );
};
export default DateTimeBox;
