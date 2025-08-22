import DatePicker, { type Value } from '@/common/components/DatePicker';

import * as s from './style.css.ts';
import { formatDate } from 'date-fns';

interface Props {
  dateTime: Date | null;
  setDateTime: (date: Date | null) => void;
  transactionText: string;
  next: () => void;
}
const DateDrawer = ({ dateTime, setDateTime, transactionText, next }: Props) => {
  const value = dateTime as Value;
  const setValue = (value: Value) => {
    if (Array.isArray(value)) return;
    setDateTime(value);
  };

  const reset = () => setDateTime(null);

  // TODO: 날짜 선택해야 다음 버튼 활성화

  return (
    <div className={s.Container}>
      <div className={s.DateWrapper}>
        <DatePicker value={value} setValue={setValue} />
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
