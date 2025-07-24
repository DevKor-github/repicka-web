import { cx } from '@styled-system/css';
import * as s from './style.css';

const DatePickButton = () => {
  return (
    <button className={s.Container}>
      <span className={cx('mgc_calendar_fill', s.Icon)} />
      날짜선택하기
    </button>
  );
};
export default DatePickButton;
