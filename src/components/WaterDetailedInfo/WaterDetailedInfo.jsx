import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWaterDataDay } from '../../redux/water/operations.js';
import { selectDailyWaterRate } from '../../redux/users/selectors.js';
import { format } from 'date-fns';

const WaterDetailedInfo = () => {
  const dispatch = useDispatch();

  let dailyNorma = useSelector(selectDailyWaterRate);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  // can not select daily norma
  if (!dailyNorma) {
    dailyNorma = '200';
  }
  useEffect(() => {
    dispatch(getWaterDataDay({ date: selectedDate, dailyNorma: dailyNorma }));
  }, [dispatch, dailyNorma, selectedDate]);
  return (
    <section className={css.sectionWaterDetailInfo}>
      <div className={css.waterDetailInfoContainer}>
        <UserPanel />
        <DailyInfo selectedDate={selectedDate} />
        <MonthInfo
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
