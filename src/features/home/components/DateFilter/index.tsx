import { useState } from 'react';
import Calendar from 'react-calendar';

import * as s from './style.css';
import { formatDate } from 'date-fns';
import SlideIcon from '@/features/home/components/DateFilter/SlideIcon';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  itemCounts: number;
  close: () => void;
}
const DateFilter = ({ itemCounts, close }: Props) => {
  const [value, setValue] = useState<Value>([null, null]);

  const resetDate = () => {
    setValue([null, null]);
  };

  const startDate = value && Array.isArray(value) && value[0] ? formatDate(value[0], 'yyyy-MM-dd') : '';
  const endDate = value && Array.isArray(value) && value[1] ? formatDate(value[1], 'yyyy-MM-dd') : '';

  const canReset = value && Array.isArray(value) && value[0] !== null && value[1] !== null;

  return (
    <div className={s.Container}>
      <div className={s.DateFilterWrapper}>
        <div className={s.DateFilter}>
          <Calendar
            value={value}
            onChange={setValue}
            prevLabel={<SlideIcon direction="left" />}
            nextLabel={<SlideIcon direction="right" />}
            formatDay={(_, date) => date.getDate().toString()}
            formatMonthYear={(_, date) => formatDate(date, 'yyyy M월')}
            allowPartialRange={true}
            minDetail="month"
            next2Label={null}
            prev2Label={null}
            selectRange={true}
            goToRangeStartOnSelect={false}
            showFixedNumberOfWeeks={true}
          />
        </div>
        <div className={s.SelectedDateWrapper}>
          <div className={s.SelectedDateItem}>
            <label>대여일</label>
            <div>{startDate}</div>
          </div>
          <div className={s.SelectedDateItem}>
            <label>반납일</label>
            <div>{endDate}</div>
          </div>
        </div>
      </div>
      <div className={s.FilterButtonWrapper}>
        {canReset && (
          <button className={s.FilterButton({ type: 'reset' })} onClick={resetDate}>
            <span className="mgc_refresh_1_fill" />
          </button>
        )}
        <button className={s.FilterButton({ type: 'result' })} onClick={close}>
          {itemCounts}개 상품 보기
        </button>
      </div>
    </div>
  );
};
export default DateFilter;
