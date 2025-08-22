import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

import * as s from './style.css';
import { formatDate } from 'date-fns';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DatePicker = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={s.DatePickerContainer}>
      <div className={s.DatePicker}>
        <Calendar
          value={value}
          onChange={onChange}
          formatDay={(_, date) => date.getDate().toString()}
          formatMonthYear={(_, date) => formatDate(date, 'yyyy M월')}
          minDetail="year"
          next2Label={null}
          prev2Label={null}
          selectRange={true}
        />
      </div>
      <div>
        <label htmlFor=""></label>
      </div>
    </div>
  );
};
export default DatePicker;
