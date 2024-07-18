import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getWaterDataDay } from '../../redux/water/operations.js';

const WaterDetailedInfo = () => {
  const dispatch = useDispatch();
  const getStartOfDay = () => {
    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    return startOfDay.toISOString();
  };

  useEffect(() => {
    const dateWithOffset = getStartOfDay();
    dispatch(getWaterDataDay({ date: dateWithOffset, dailyNorma: '1000' }));
  }, [dispatch]);
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
