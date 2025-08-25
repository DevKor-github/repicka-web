import { formatDate } from 'date-fns';

import * as s from './style.css.ts';

import useDrawer from '@/common/hooks/useDrawer.tsx';
import Drawer from '@/common/components/Drawer/index.tsx';
import DateDrawer from '@/features/pick/components/DateDrawer/index.tsx';
import TimeDrawer from '@/features/pick/components/TimeDrawer/index.tsx';

interface Props {
  itemId: number;
  transactionText: '거래' | '대여' | '반납';
  label: string;
  dateTime: Date | null;
  setDateTime: (date: Date | null) => void;
  canSelectTime?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const DateTimeButton = ({
  itemId,
  transactionText,
  label,
  dateTime,
  setDateTime,
  canSelectTime = false,
  minDate,
  maxDate,
}: Props) => {
  const { open: dateDrawerOpen, drawerState: dateDrawerState, close: dateDrawerClose } = useDrawer();
  const { open: timeDrawerOpen, drawerState: timeDrawerState, close: timeDrawerClose } = useDrawer();

  const isTimeButtonActive = dateTime !== null;

  const handleTimeDrawerOpen = () => {
    if (isTimeButtonActive) {
      timeDrawerOpen();
      return;
    }

    dateDrawerOpen();
  };

  const handleTimeDrawerPrev = () => {
    timeDrawerClose();
    dateDrawerOpen();
  };
  const handleDateDrawerNext = () => {
    dateDrawerClose();
    if (canSelectTime) timeDrawerOpen();
  };

  return (
    <>
      <div className={s.ButtonContainer}>
        <label className={s.Label}>{label}</label>
        <div className={s.ButtonWrapper}>
          {canSelectTime ? (
            <div className={s.ButtonItem({ dateOnly: false })}>
              <button onClick={dateDrawerOpen}>
                <p>{dateTime ? formatDate(dateTime, 'yy.MM.dd') : ''}</p>
                <span className="mgc_calendar_fill" />
              </button>
              <div />
              <button onClick={handleTimeDrawerOpen}>
                <p>{dateTime ? formatDate(dateTime, 'HH:mm') : ''}</p>
                <span className="mgc_alarm_1_fill" />
              </button>
            </div>
          ) : (
            <button className={s.ButtonItem({ dateOnly: true })} onClick={dateDrawerOpen}>
              <p>{dateTime ? formatDate(dateTime, 'yy.MM.dd') : ''}</p>
              <span className="mgc_calendar_fill" />
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
          minDate={minDate}
          maxDate={maxDate}
          itemId={itemId}
          dateTime={dateTime}
          setDateTime={setDateTime}
          transactionText={transactionText}
          next={handleDateDrawerNext}
        />
      </Drawer>
      {dateTime && (
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
      )}
    </>
  );
};
export default DateTimeButton;
