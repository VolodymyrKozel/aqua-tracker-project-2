import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
/* import { selectDailyNorma } from '../../redux/water/selectors'; */

const MonthInfo = ({
  selectedDate,
  setSelectedDate,
  handleNextMonth,
  handlePrevMonth,
}) => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Month</h1>
        <CalendarPagination
          selectedDate={selectedDate}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default MonthInfo;
