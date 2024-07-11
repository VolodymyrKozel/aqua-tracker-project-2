import { format, isSameDay } from 'date-fns';
import css from './CalendarItem.module.css';
import clsx from 'clsx';

function CalendarItem({ day, currentDate }) {
  const isToday = isSameDay(day, currentDate);

  return (
    <div className={css.wrapper}>
      <span className={clsx(css.day, isToday && css.today)}>
        {format(day, 'd')}
      </span>
    </div>
  );
}

export default CalendarItem;
