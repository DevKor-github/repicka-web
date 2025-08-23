import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { type Value } from '@/common/components/DatePicker';

import * as s from './style.css';

// TODO: 확정 디자인 & 기능으로 고고
interface Props {
  dateTime: Date | null;
  setDateTime: (date: Date | null) => void;
  transactionText: '거래' | '대여' | '반납';
  next: () => void;
  prev: () => void;
}
const TimeDrawer = ({ dateTime, setDateTime, transactionText, next, prev }: Props) => {
  const value = dateTime as Value;
  const setValue = (value: Value) => {
    if (Array.isArray(value)) return;
    setDateTime(value);
  };

  return (
    <div className={s.Container}>
      <div className={s.TimePickerWrapper}>
        <label>{transactionText} 시간</label>
        <TimePicker />
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
