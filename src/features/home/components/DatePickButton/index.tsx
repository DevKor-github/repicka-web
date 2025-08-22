import { cx } from '@styled-system/css';
import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import Drawer from '@/common/components/Drawer';
import DateFilter from '@/features/home/components/DateFilter';

interface Props {
  itemCounts: number;
}
const DatePickButton = ({ itemCounts }: Props) => {
  const { open, close, drawerState } = useDrawer();

  return (
    <>
      <button className={s.Container} onClick={open}>
        <span className={cx('mgc_calendar_fill', s.Icon)} />
        날짜선택
      </button>
      <Drawer title="날짜" description="대여 및 반납일자를 선택해 주세요" drawerState={drawerState}>
        <DateFilter itemCounts={itemCounts} close={close} />
      </Drawer>
    </>
  );
};
export default DatePickButton;
