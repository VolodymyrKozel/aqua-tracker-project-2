import { useEffect, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useDispatch } from 'react-redux';
import { getWaterDataMonthly } from '../../redux/water/operations';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getWaterDataMonthly({ month: '07', year: '2024', dailyNorma: '2000' })
    );
  }, []);

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
