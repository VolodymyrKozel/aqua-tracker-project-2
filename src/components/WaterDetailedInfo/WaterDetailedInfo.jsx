import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectDailyNorma } from '../../redux/users/selectors.js';

const WaterDetailedInfo = () => {
  // const dispatch = useDispatch();
  // const dailyNorma = useSelector(selectDailyNorma);
  /*   const getMonthsData = () => {
    const month = getMonth(selectedDate) + 1;
    const year = getYear(selectedDate);
    dispatch(
      getWaterDataMonthly({
        month: month,
        year: year,
        dailyNorma: dailyNorma,
      })
    );
  }; */

  /*   useEffect(() => {
    getMonthsData();
  }, [monthChange, dailyNorma, dispatch]);

  useEffect(() => {
    dispatch(getWaterDataDay({ date: selectedDate, dailyNorma: dailyNorma }));
  }, [selectedDate, dailyNorma, dispatch]); */

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
