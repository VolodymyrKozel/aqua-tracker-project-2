import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useDispatch } from 'react-redux';
import { getWaterDataDay } from '../../redux/water/operations';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  console.log(dispatch(getWaterDataDay(new Date(), 2)));
  const monthlyData = dispatch(getWaterDataDay(new Date(), 2)) || [];
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Month</h1>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        monthlyData={monthlyData}
      />
    </div>
  );
};

export default MonthInfo;
