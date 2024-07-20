import { useEffect } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterDataMonthly } from '../../redux/water/operations';
import { getMonth, getYear } from 'date-fns';
import { selectDailyNorma } from '../../redux/users/selectors';
import Loader from '../shared/Loader/Loader';
/* import { selectDailyNorma } from '../../redux/water/selectors'; */

const MonthInfo = ({ selectedDate, setSelectedDate }) => {
  /*   const dailyNorma = useSelector(selectDailyWaterRate); */
  const dispatch = useDispatch();
  const dailyNorma = useSelector(selectDailyNorma);
  const isLoading = useSelector(state => state.water.isLoading);
  useEffect(() => {
    const month = getMonth(selectedDate) + 1; // Повертає номер місяця (0 - січень, 11 - грудень)
    const year = getYear(selectedDate); // Повертає рік
    console.log(isLoading);
    dispatch(
      getWaterDataMonthly({ month: month, year: year, dailyNorma: dailyNorma })
    );
  }, [dispatch, selectedDate]);

  return isLoading ? (
    <Loader />
  ) : (
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
