import DatePicker, { type Value } from '@/common/components/DatePicker';

import * as s from './style.css.ts';
import { formatDate } from 'date-fns';
import { useGetRentalAvailability } from '@/features/pick/apis/useGetRentalAvailability.ts';
import { useState } from 'react';
import type { TileDisabledFunc } from 'react-calendar';

interface Props {
  itemId: number;
  dateTime: Date | null;
  setDateTime: (date: Date | null) => void;
  transactionText: '거래' | '대여' | '반납';
  next: () => void;
  minDate?: Date;
  maxDate?: Date;
}
const DateDrawer = ({ itemId, dateTime, setDateTime, transactionText, next, minDate = new Date(), maxDate }: Props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { data: rentalAvailability } = useGetRentalAvailability({ itemId, year, month });
  const value = dateTime as Value;
  const setValue = (value: Value) => {
    if (Array.isArray(value)) return;
    setDateTime(value);
  };

  const reset = () => setDateTime(null);

  const tileDisabled: TileDisabledFunc = ({ date }) => {
    if (rentalAvailability === undefined) return true;
    const canRental = !!rentalAvailability[formatDate(date, 'yyyy-MM-dd')];
    return !canRental;
  };

  return (
    <div className={s.Container}>
      <div className={s.DateWrapper}>
        <DatePicker
          value={value}
          setValue={setValue}
          minDate={minDate}
          maxDate={maxDate}
          tileDisabled={tileDisabled}
          checkMonthYear={(month, year) => {
            setMonth(month);
            setYear(year);
          }}
        />
        <div className={s.SelectedDateWrapper}>
          <label>{transactionText}일</label>
          <div>{dateTime ? formatDate(dateTime, 'yyyy.MM.dd') : ''}</div>
        </div>
      </div>
      <div className={s.ButtonWrapper}>
        <button className={s.DateDrawerButton({ type: 'reset' })} onClick={reset}>
          <span className="mgc_refresh_1_fill" />
        </button>
        <button className={s.DateDrawerButton({ type: 'submit' })} onClick={next}>
          다음
        </button>
      </div>
    </div>
  );
};
export default DateDrawer;
