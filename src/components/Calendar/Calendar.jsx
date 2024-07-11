import { startOfMonth, endOfMonth, addDays } from 'date-fns';
import CalendarItem from './CalendarItem/CalendarItem';
import css from './Calendar.module.css';

function Calendar({ month, currentDate }) {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(monthStart);

  let days = [];
  let day = monthStart;
  let endMonth = monthEnd;

  while (day <= endMonth) {
    days.push(
      <CalendarItem
        key={day}
        day={day}
        monthStart={monthStart}
        currentDate={currentDate}
      />
    );
    day = addDays(day, 1);
  }
  return <div className={css.calendar}>{days}</div>;
}

export default Calendar;
