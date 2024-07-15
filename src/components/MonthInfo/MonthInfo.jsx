import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { generateMonthlyData } from '../Calendar/data/monthlyData';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const monthlyData = generateMonthlyData();
  // const monthlyData = [
  //   { day: '01-01-2024', value: '10%' },
  // { day: '2', value: '50%' },
  // { day: '3', value: '70%' },
  // { day: '4', value: '30%' },
  // { day: '5', value: '90%' },
  // { day: '6', value: '20%' },
  // { day: '7', value: '40%' },
  // { day: '8', value: '60%' },
  // { day: '9', value: '80%' },
  // { day: '10', value: '25%' },
  // { day: '11', value: '35%' },
  // { day: '12', value: '55%' },
  // { day: '13', value: '65%' },
  // { day: '14', value: '75%' },
  // { day: '15', value: '45%' },
  // { day: '16', value: '85%' },
  // { day: '17', value: '95%' },
  // { day: '18', value: '5%' },
  // { day: '19', value: '15%' },
  // { day: '20', value: '25%' },
  // { day: '21', value: '35%' },
  // { day: '22', value: '45%' },
  // { day: '23', value: '55%' },
  // { day: '24', value: '65%' },
  // { day: '25', value: '75%' },
  // { day: '26', value: '85%' },
  // { day: '27', value: '95%' },
  // { day: '28', value: '5%' },
  // { day: '29', value: '15%' },
  // { day: '30', value: '25%' },
  // { day: '31', value: '35%' },
  // ];
  console.log(monthlyData);
  return (
    <>
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
    </>
  );
};

export default MonthInfo;
