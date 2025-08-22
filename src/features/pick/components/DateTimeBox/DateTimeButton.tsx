import { formatDate } from 'date-fns';
import * as s from './style.css.ts';
import useDrawer from '@/common/hooks/useDrawer.tsx';
import Drawer from '@/common/components/Drawer/index.tsx';
import type { TransactionType } from '@/libs/types/item.ts';

interface Props {
  transactionType: TransactionType;
  label: string;
  dateTime: Date;
  setDateTime: (date: Date) => void;
  canSelectTime?: boolean;
}
const DateTimeButton = ({ transactionType, label, dateTime, setDateTime, canSelectTime = false }: Props) => {
  const { open: dateDrawerOpen, drawerState: dateDrawerState } = useDrawer();
  const { open: timeDrawerOpen, drawerState: timeDrawerState } = useDrawer();

  const transactionText = transactionType === 'RENTAL' ? '대여' : '거래';

  return (
    <>
      <div className={s.ButtonContainer}>
        <label className={s.Label}>{label}</label>
        <div className={s.ButtonWrapper}>
          <button className={s.ButtonItem} onClick={dateDrawerOpen}>
            <p>{formatDate(dateTime, 'yy.MM.dd')}</p>
            <span className="mgc_calendar_fill" />
          </button>
          {canSelectTime && (
            <button className={s.ButtonItem} onClick={timeDrawerOpen}>
              <p>{formatDate(dateTime, 'HH:mm')}</p>
              <span className="mgc_alarm_1_fill" />
            </button>
          )}
        </div>
      </div>
      <Drawer
        drawerState={dateDrawerState}
        title="날짜"
        description={`${transactionText}를 원하는 날짜를 선택해주세요`}
      >
        <div></div>
      </Drawer>
      <Drawer
        drawerState={timeDrawerState}
        title="시간"
        description={`${transactionText}를 원하는 시간을 선택해주세요`}
      >
        <div></div>
      </Drawer>
    </>
  );
};
export default DateTimeButton;
