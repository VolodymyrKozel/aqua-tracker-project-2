import { format } from 'date-fns';
// import css from './CalendarItem.module.css';
// import clsx from 'clsx';

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

const CalendarItem = ({ data, setSelectedDate }) => {
  const handleClickDay = () => {
    setSelectedDate(data.day);
  };
  return (
    <li>
      <button onClick={handleClickDay}>
        <p>{format(data.day, 'd')}</p>
        <span>{data.value}</span>
      </button>
    </li>
  );
};

export default CalendarItem;
