import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getWaterDataDay,
  getWaterDataMonthly,
} from '../../redux/water/operations.js';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import { selectSelectedDate } from '../../redux/water/selectors.js';
import { getMonth, getYear } from 'date-fns';

const WaterDetailedInfo = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const dailyNorma = useSelector(selectDailyNorma);
  useEffect(() => {
    dispatch(
      getWaterDataMonthly({
        month: getMonth(selectedDate) + 1,
        year: getYear(selectedDate),
        dailyNorma: dailyNorma,
      })
    );
    dispatch(getWaterDataDay({ date: selectedDate, dailyNorma }));
  }, []);
  return (
    <section className={css.sectionWaterDetailInfo}>
      <div className={css.waterDetailInfoContainer}>
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
