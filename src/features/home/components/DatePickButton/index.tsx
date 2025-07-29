import { cx } from '@styled-system/css';
import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import Drawer from '@/common/components/Drawer';
import DatePicker from '@/features/home/components/DatePickButton/DatePicker';

const DatePickButton = () => {
  const { open, drawerState } = useDrawer();
  // TODO: 디자인 확정, 백엔드 API 나오면 디자인 및 로직 추가
  return (
    <>
      <button className={s.Container} onClick={open}>
        <span className={cx('mgc_calendar_fill', s.Icon)} />
        날짜선택
      </button>
      <Drawer title="대여 및 반납 일자" drawerState={drawerState}>
        <DatePicker />
      </Drawer>
    </>
  );
};
export default DatePickButton;
