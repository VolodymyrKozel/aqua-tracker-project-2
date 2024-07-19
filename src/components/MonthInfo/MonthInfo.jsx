import { useEffect, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterDataMonthly } from '../../redux/water/operations';
import { getMonth, getYear, format } from 'date-fns';
/* import { selectDailyNorma } from '../../redux/water/selectors'; */

const MonthInfo = ({ selectedDate, setSelectedDate }) => {
  /*   const dailyNorma = useSelector(selectDailyWaterRate); */
  const dispatch = useDispatch();
  useEffect(() => {
    /*     const month = format(getMonth(selectedDate)+1, 'M'); // Повертає номер місяця (0 - січень, 11 - грудень)
    const year = getYear(selectedDate); // Повертає рік */
    dispatch(
      getWaterDataMonthly({ month: '07', year: '2024', dailyNorma: '200' })
    );
  }, [dispatch, selectedDate]);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Month</h1>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default MonthInfo;
