import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getWaterDataDay,
  getWaterDataMonthly,
} from '../../redux/water/operations.js';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import { addMonths, format, getMonth, getYear, subMonths } from 'date-fns';

const WaterDetailedInfo = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  // попередня дата
  // const prevDate = useRef(null);
  const [monthChange, setMonthChange] = useState(null);

  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };
  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  const getMonthsData = () => {
    const month = getMonth(selectedDate) + 1;
    const year = getYear(selectedDate);
    dispatch(
      getWaterDataMonthly({
        month: month,
        year: year,
        dailyNorma: dailyNorma,
      })
    );
  };

  let dailyNorma = useSelector(selectDailyNorma);
  useEffect(() => {
    getMonthsData();
    // prevDate.current = selectedDate;
  }, [monthChange]);
  useEffect(() => {
    dispatch(getWaterDataDay({ date: selectedDate, dailyNorma: dailyNorma }));
    // if (
    //   prevDate.current !== selectedDate &&
    //   !isSameMonth(prevDate.current, selectedDate)
    // ) {
    //   getMonthsData();
    // }
    // prevDate.current = selectedDate;
  }, [selectedDate]);

  return (
    <section className={css.sectionWaterDetailInfo}>
      <div className={css.waterDetailInfoContainer}>
        <UserPanel />
        <DailyInfo selectedDate={selectedDate} />
        <MonthInfo
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setMonthChange={setMonthChange}
        />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
