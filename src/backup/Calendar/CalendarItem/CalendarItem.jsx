import { useEffect, useRef } from 'react';
import css from './CalendarItem.module.css';
import clsx from 'clsx';
import { isSameDay } from 'date-fns';

const CalendarItem = ({ data, selectedDate, setSelectedDate }) => {
  const handleClickDay = () => {
    setSelectedDate(data.date);
  };
  const currentBtn = useRef();
  useEffect(() => {
    if (isSameDay(data.date, selectedDate)) {
      currentBtn.current.focus();
    }
  }, [data.date, selectedDate]);

  return (
    <li className={css.item} key={data.day}>
      <button
        ref={currentBtn}
        className={clsx(css.btn, data.totalValue < 100 && css.btnNotEnough)}
        onClick={handleClickDay}
      >
        <p className={css.number}>{data.day}</p>
      </button>
      <p className={css.percentage}>{data.totalValue}%</p>
    </li>
  );
};

export default CalendarItem;
