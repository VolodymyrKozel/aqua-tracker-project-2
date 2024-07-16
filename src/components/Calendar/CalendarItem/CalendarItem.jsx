import { format } from 'date-fns';
import css from './CalendarItem.module.css';
import clsx from 'clsx';

// import List from '../../shared/List/List';

// function CalendarItem({ day, currentDate }) {
//   const isToday = isSameDay(day, currentDate);

//   return (
//     <div className={css.wrapper}>
//       <span className={clsx(css.day, isToday && css.today)}>
//         {format(day, 'd')}
//       </span>
//     </div>
//   );
// }

// export default CalendarItem;

const CalendarItem = ({ data, selectedDate, setSelectedDate }) => {
  const handleClickDay = () => {
    setSelectedDate(data.day);
  };

  return (
    <li className={css.item}>
      <button
        className={clsx(css.btn, selectedDate === data.day && css.selectedBtn)}
        onClick={handleClickDay}
      >
        <p className={css.number}>{format(data.day, 'd')}</p>
      </button>
      <p className={css.percentage}>{data.value}</p>
    </li>
  );
};

export default CalendarItem;
