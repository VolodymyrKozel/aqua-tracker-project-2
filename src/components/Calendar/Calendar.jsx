// import { startOfMonth, endOfMonth, addDays, isSameDay } from 'date-fns';
// import CalendarItem from './CalendarItem/CalendarItem';
import { useSelector } from 'react-redux';
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
import CalendarItem from './CalendarItem/CalendarItem';
import { selectMonthlyWater } from '../../redux/water/selectors';
import { addDays, endOfMonth, format, getMonth, startOfMonth } from 'date-fns';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const monthlyData = useSelector(selectMonthlyWater);
  const currentDate = new Date();
  const currentMonth = getMonth(currentDate) + 1;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);

  let days = [];
  let day = monthStart;
  let endMonth = monthEnd;
  function getRandomPercentage() {
    return Math.floor(Math.random() * 100) + 1;
  }
  while (day <= endMonth) {
    days.push({
      _id: format(day, 'd'),
      totalValue: getRandomPercentage() + '%',
    });
    day = addDays(day, 1);
  }
  return (
    <>
      <ul className={css.list}>
        {days.map(item => (
          <CalendarItem
            data={item}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            key={item._id}
          />
        ))}
      </ul>
    </>
  );
};

export default Calendar;
