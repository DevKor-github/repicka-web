import { cx } from '@styled-system/css';
import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import Drawer from '@/common/components/Drawer';
import DateFilter from '@/features/home/components/DateFilter';
import { useSearchParams } from 'react-router';
import { formatDate } from 'date-fns';

interface Props {
  itemCounts: number;
}
const DatePickButton = ({ itemCounts }: Props) => {
  const [searchParams] = useSearchParams();
  const { open, close, drawerState } = useDrawer();

  const startDate = searchParams.get('start-date') ? new Date(searchParams.get('start-date') as string) : null;
  const endDate = searchParams.get('end-date') ? new Date(searchParams.get('end-date') as string) : null;
  const isSelected = startDate !== null && endDate !== null;

  return (
    <>
      <button className={s.Container({ isSelected })} onClick={open}>
        <span className={cx('mgc_calendar_fill', s.Icon)} />
        {isSelected ? `${formatDate(startDate, 'MM.dd')} ~ ${formatDate(endDate, 'MM.dd')}` : '날짜선택'}
      </button>
      <Drawer title="날짜" description="대여 및 반납일자를 선택해 주세요" drawerState={drawerState}>
        <DateFilter itemCounts={itemCounts} close={close} />
      </Drawer>
    </>
  );
};
export default DatePickButton;
