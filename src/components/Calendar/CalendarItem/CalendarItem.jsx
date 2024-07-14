// import { format, isSameDay } from 'date-fns';
// import css from './CalendarItem.module.css';
// import clsx from 'clsx';

import List from '../../shared/List/List';

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

const CalendarItem = ({ data, className }) => {
  return (
    <div className={className}>
      {/* <h2>{data.month}</h2> */}
      <div className="days-container">
        {Object.entries(data.days).map(([day, value]) => (
          <List key={day} className="day-item">
            <li className="day-number">{day}</li>
            <li className="day-value">{value}</li>
          </List>
        ))}
      </div>
    </div>
  );
};

export default CalendarItem;
