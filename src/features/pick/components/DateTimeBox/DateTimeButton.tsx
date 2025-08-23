import { formatDate } from 'date-fns';

import * as s from './style.css.ts';

import useDrawer from '@/common/hooks/useDrawer.tsx';
import Drawer from '@/common/components/Drawer/index.tsx';
import DateDrawer from '@/features/pick/components/DateDrawer/index.tsx';
import TimeDrawer from '@/features/pick/components/TimeDrawer/index.tsx';

interface Props {
  transactionText: '거래' | '대여' | '반납';
  label: string;
  dateTime: Date | null;
  setDateTime: (date: Date | null) => void;
  canSelectTime?: boolean;
}
const DateTimeButton = ({ transactionText, label, dateTime, setDateTime, canSelectTime = false }: Props) => {
  const { open: dateDrawerOpen, drawerState: dateDrawerState, close: dateDrawerClose } = useDrawer();
  const { open: timeDrawerOpen, drawerState: timeDrawerState, close: timeDrawerClose } = useDrawer();

  const isTimeButtonActive = dateTime !== null;

  const handleDateDrawerNext = () => {
    dateDrawerClose();
    timeDrawerOpen();
  };

  const handleTimeDrawerPrev = () => {
    timeDrawerClose();
    dateDrawerOpen();
  };

  return (
    <>
      <div className={s.ButtonContainer}>
        <label className={s.Label}>{label}</label>
        <div className={s.ButtonWrapper}>
          <button className={s.ButtonItem()} onClick={dateDrawerOpen}>
            <p>{dateTime ? formatDate(dateTime, 'yy.MM.dd') : ''}</p>
            <span className="mgc_calendar_fill" />
          </button>
          {canSelectTime && (
            <button
              className={s.ButtonItem({ isActive: isTimeButtonActive })}
              onClick={() => {
                if (isTimeButtonActive) timeDrawerOpen();
              }}
            >
              <p>{dateTime ? formatDate(dateTime, 'HH:mm') : ''}</p>
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
        <DateDrawer
          dateTime={dateTime}
          setDateTime={setDateTime}
          transactionText={transactionText}
          next={handleDateDrawerNext}
        />
      </Drawer>
      {/* TODO: 날짜 선택해야 시간 선택 가능하도록 수정 */}
      <Drawer
        drawerState={timeDrawerState}
        title="시간"
        description={`${transactionText}를 원하는 시간을 선택해주세요`}
      >
        <TimeDrawer
          dateTime={dateTime}
          setDateTime={setDateTime}
          transactionText={transactionText}
          next={timeDrawerClose}
          prev={handleTimeDrawerPrev}
        />
      </Drawer>
    </>
  );
};
export default DateTimeButton;
