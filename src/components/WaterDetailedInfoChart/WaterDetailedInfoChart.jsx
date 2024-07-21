// import UserPanel from '../UserPanel/UserPanel.jsx';
// import DailyInfo from '../DailyInfo/DailyInfo.jsx';
// import css from './WaterDetailedInfoChart.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getWaterDataDay } from '../../redux/water/operations.js';
// import { selectDailyNorma } from '../../redux/users/selectors.js';
// import { format } from 'date-fns';
// import MonthInfoChart from '../MonthInfoChart/MonthInfoChart.jsx';

// const WaterDetailedInfoChart = () => {
//   const dispatch = useDispatch();

//   let dailyNorma = useSelector(selectDailyNorma);
//   const [selectedDate, setSelectedDate] = useState(
//     format(new Date(), 'yyyy-MM-dd')
//   );
//   if (!dailyNorma) {
//     dailyNorma = '200';
//   }
//   useEffect(() => {
//     dispatch(getWaterDataDay({ date: selectedDate, dailyNorma: dailyNorma }));
//   }, [dispatch, dailyNorma, selectedDate]);
//   return (
//     <section className={css.sectionWaterDetailInfo}>
//       <div className={css.waterDetailInfoContainer}>
//         <UserPanel />
//         <DailyInfo selectedDate={selectedDate} />
//         <MonthInfoChart
//           selectedDate={selectedDate}
//           setSelectedDate={setSelectedDate}
//         />
//       </div>
//     </section>
//   );
// };

// export default WaterDetailedInfoChart;


import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfoChart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWaterDataDay } from '../../redux/water/operations.js';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import { format } from 'date-fns';
import MonthInfoChart from '../MonthInfoChart/MonthInfoChart.jsx';

const WaterDetailedInfoChart = () => {
  const dispatch = useDispatch();
  const dailyNorma = useSelector(selectDailyNorma) || '200';
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  useEffect(() => {
    dispatch(getWaterDataDay({ date: selectedDate, dailyNorma }));
  }, [dispatch, dailyNorma, selectedDate]);

  return (
    <section className={css.sectionWaterDetailInfo}>
      <div className={css.waterDetailInfoContainer}>
        <UserPanel />
        <DailyInfo selectedDate={selectedDate} />
        <div style={{ flexGrow: 1 }} /> 
        <MonthInfoChart
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </section>
  );
};

export default WaterDetailedInfoChart;
