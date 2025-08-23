import { TimePicker } from 'react-time-picker-typescript';

import * as s from './style.css';

import { formatDate } from 'date-fns';

// TODO: 확정 디자인 & 기능으로 고고
interface Props {
  dateTime: Date;
  setDateTime: (date: Date) => void;
  transactionText: '거래' | '대여' | '반납';
  next: () => void;
  prev: () => void;
}
const TimeDrawer = ({ dateTime, setDateTime, transactionText, next, prev }: Props) => {
  const prefix = formatDate(dateTime, 'yyyy-MM-dd');
  const value = formatDate(dateTime, 'HH:mm');

  const setValue = (value: string) => {
    const date = new Date(`${prefix} ${value || '00:00'}`);
    setDateTime(date);
  };

  return (
    <div className={s.Container}>
      <div className={s.TimePickerWrapper}>
        <label>{transactionText} 시간</label>
        <input type="time" value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <div className={s.ButtonWrapper}>
        <button className={s.DateDrawerButton({ type: 'prev' })} onClick={prev}>
          이전
        </button>
        <button className={s.DateDrawerButton({ type: 'submit' })} onClick={next}>
          다음
        </button>
      </div>
    </div>
  );
};
export default TimeDrawer;
