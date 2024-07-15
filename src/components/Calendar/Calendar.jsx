// import { startOfMonth, endOfMonth, addDays, isSameDay } from 'date-fns';
// import CalendarItem from './CalendarItem/CalendarItem';
import css from './Calendar.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectMonthlyWater } from '../../redux/aqua/selectors.js';
// import { getMonthlyWater } from '../../redux/aqua/operations.js';

// function Calendar({ month, currentDate }) {
// const dispatch = useDispatch();
// const monthlyData = useSelector(selectMonthlyWater);

// useEffect(() => {
//   dispatch(getMonthlyWater(month));
// }, [dispatch, month]);

// const monthStart = startOfMonth(month);
// const monthEnd = endOfMonth(monthStart);

// let days = [];
// let day = monthStart;
// let endMonth = monthEnd;

// const getDayData = day => {
//   return monthlyData.find(data => isSameDay(new Date(data.date), day));
// };

// while (day <= endMonth) {
//   days.push(
//     <CalendarItem
//       className={css.item}
//       key={day}
//       day={day}
//       monthStart={monthStart}
//       currentDate={currentDate}
//       getDayData={getDayData}
//     />
//   );
//   day = addDays(day, 1);
// }
// return <div className={css.calendar}>{days}</div>;
// }

// // export default Calendar;
// import List from '../shared/List/List';
import CalendarItem from './CalendarItem/CalendarItem';
// import dataCalendar from './data/monthlyData.json';

const Calendar = ({ selectedDate, setSelectedDate, monthlyData: data }) => {
  return (
    <>
      <ul className={css.list}>
        {data.map(item => (
          <CalendarItem
            data={item}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            key={item.day}
          />
        ))}
      </ul>
    </>
  );
};

export default Calendar;
