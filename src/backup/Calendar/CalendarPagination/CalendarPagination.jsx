import { format } from 'date-fns';
import css from './CalendarPagination.module.css';
import Icon from '../../shared/Icon/Icon';

const CalendarPagination = ({
  selectedDate,
  handleNextMonth,
  handlePrevMonth,
}) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handlePrevMonth}>
        <Icon
          className={css.icon}
          width="8"
          height="12"
          id="icon-chevron-left"
        />
      </button>
      <p className={css.date}>{format(selectedDate, 'MMMM, yyyy')}</p>
      <button className={css.btn} onClick={handleNextMonth}>
        <Icon className={css.icon} id="icon-chevron-right" />
      </button>
    </div>
  );
};

export default CalendarPagination;
