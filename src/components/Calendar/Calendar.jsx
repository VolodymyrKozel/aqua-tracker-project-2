import { startOfMonth, endOfMonth, addDays, isSameDay } from 'date-fns';
import CalendarItem from './CalendarItem/CalendarItem';
import css from './Calendar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
/* import { selectMonthlyWater } from '../../redux/aqua/selectors.js'; */
/* import { getMonthlyWater } from '../../redux/aqua/operations.js'; */

function Calendar({ month, currentDate }) {
  const dispatch = useDispatch();
  /*   const monthlyData = useSelector(selectMonthlyWater); */

  const monthlyData = [
    {
      date: '2022-01-01',
      water: 430,
    },
    {
      date: '2022-01-02',
      water: 670,
    },
    {
      date: '2022-01-03',
      water: 770,
    },
    {
      date: '2022-01-04',
      water: 880,
    },
    {
      date: '2022-01-05',
      water: 990,
    },
    {
      date: '2022-01-06',
      water: 0,
    },
    { date: '2022-01-07', water: 80 },
    { date: '2022-01-08', water: 900 },
    { date: '2022-01-09', water: 1000 },
    { date: '2022-01-10', water: 600 },
    { date: '2022-01-11', water: 300 },
    { date: '2022-01-12', water: 400 },
    { date: '2022-01-13', water: 500 },
    { date: '2022-01-14', water: 1000 },
    {
      date: '2022-01-15',
      water: 100,
    },
    {
      date: '2022-01-16',
      water: 200,
    },
    {
      date: '2022-01-17',
      water: 300,
    },
    {
      date: '2022-01-18',
      water: 400,
    },
    {
      date: '2022-01-19',
      water: 500,
    },
    {
      date: '2022-01-20',
      water: 600,
    },
    {
      date: '2022-01-21',
      water: 700,
    },
  ];
  /*   useEffect(() => {
   dispatch(getMonthlyWater(month));
  }, [dispatch, month]); */

  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(monthStart);

  let days = [];
  let day = monthStart;
  let endMonth = monthEnd;

  const getDayData = day => {
    return monthlyData.find(data => isSameDay(new Date(data.date), day));
  };

  while (day <= endMonth) {
    days.push(
      <CalendarItem
        key={day}
        day={day}
        monthStart={monthStart}
        currentDate={currentDate}
        getDayData={getDayData}
      />
    );
    day = addDays(day, 1);
  }
  return <div className={css.calendar}>{days}</div>;
}

export default Calendar;
