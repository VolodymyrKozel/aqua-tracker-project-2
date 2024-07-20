import { useEffect } from 'react';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import css from './MonthInfoChart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterDataMonthly } from '../../redux/water/operations';
import { getMonth, getYear } from 'date-fns';
import { selectDailyNorma } from '../../redux/users/selectors';
import WaterConsumptionChart from '../WaterConsumptionChart/WaterConsumptionChart';

const MonthInfoChart = ({ selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();
  const dailyNorma = useSelector(selectDailyNorma);
  const isLoading = useSelector(state => state.water.isLoading);

  useEffect(() => {
    const month = getMonth(selectedDate);
    const year = getYear(selectedDate);
    console.log(isLoading);
    dispatch(
      getWaterDataMonthly({ month: month, year: year, dailyNorma: dailyNorma })
    );
  }, [dispatch, selectedDate, dailyNorma]);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Statistics</h1>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className={css.chartWrapper}>
          <WaterConsumptionChart />
      </div>
    </div>
  );
};

export default MonthInfoChart;
