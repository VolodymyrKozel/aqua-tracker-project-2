import { addMonths, format, getMonth, getYear, subMonths } from 'date-fns';
import css from './CalendarPagination.module.css';
import Icon from '../../shared/Icon/Icon';
import { setDate } from '../../../redux/water/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import {
  getWaterDataDay,
  getWaterDataMonthly,
} from '../../../redux/water/operations';
import { selectDailyNorma } from '../../../redux/users/selectors';
import { useTranslation } from 'react-i18next';

const CalendarPagination = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const dailyNorma = useSelector(selectDailyNorma);
  const { t } = useTranslation();

  function getMonthlyData(month, year) {
    dispatch(
      getWaterDataMonthly({
        month: month,
        year: year,
        dailyNorma: dailyNorma,
      })
    );
  }

  const handlePrevMonth = () => {
    const newDate = subMonths(selectedDate, 1);
    dispatch(setDate(format(newDate, 'yyyy-MM-dd'))); // Update the date in the store
    dispatch(
      getWaterDataDay({ date: format(newDate, 'yyyy-MM-dd'), dailyNorma })
    );
    getMonthlyData(getMonth(newDate) + 1, getYear(newDate));
  };

  const handleNextMonth = () => {
    const newDate = addMonths(selectedDate, 1);
    dispatch(setDate(format(newDate, 'yyyy-MM-dd'))); // Update the date in the store
    getMonthlyData(getMonth(newDate) + 1, getYear(newDate));
    dispatch(
      getWaterDataDay({ date: format(newDate, 'yyyy-MM-dd'), dailyNorma })
    );
  };

  const monthName = format(selectedDate, 'MMMM');
  const formattedMonth = t(`months.${monthName}`);

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
      <p className={css.date}>{`${formattedMonth}, ${format(
        selectedDate,
        'yyyy'
      )}`}</p>
      <button className={css.btn} onClick={handleNextMonth}>
        <Icon className={css.icon} id="icon-chevron-right" />
      </button>
    </div>
  );
};

export default CalendarPagination;
