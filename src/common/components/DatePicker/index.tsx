import { formatDate } from 'date-fns';
import Calendar, { type TileDisabledFunc } from 'react-calendar';

import * as s from './style.css.ts';

import SlideIcon from '@/common/components/DatePicker/SlideIcon';

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  value: Value;
  setValue: (value: Value) => void;
  range?: boolean;
  minDate?: Date;
  maxDate?: Date;
  tileDisabled?: TileDisabledFunc;
  checkMonthYear?: (month: number, year: number) => void;
}
const DatePicker = ({ value, setValue, range = false, minDate, maxDate, tileDisabled, checkMonthYear }: Props) => {
  return (
    <div className={s.Container}>
      <Calendar
        value={value}
        onChange={setValue}
        prevLabel={<SlideIcon direction="left" />}
        nextLabel={<SlideIcon direction="right" />}
        formatDay={(_, date) => date.getDate().toString()}
        formatMonthYear={(_, date) => {
          checkMonthYear?.(date.getMonth() + 1, date.getFullYear());
          return formatDate(date, 'yyyy M월');
        }}
        allowPartialRange={true}
        minDetail="month"
        next2Label={null}
        prev2Label={null}
        selectRange={range}
        goToRangeStartOnSelect={false}
        showFixedNumberOfWeeks={true}
        minDate={minDate}
        maxDate={maxDate}
        tileDisabled={tileDisabled}
      />
    </div>
  );
};
export default DatePicker;
