import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
const MonthInfo = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Month</h1>
        <CalendarPagination />
      </div>
      <Calendar />
    </div>
  );
};

export default MonthInfo;
