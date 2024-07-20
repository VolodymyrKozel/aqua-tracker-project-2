import WaterConsumptionChart from '../../components/WaterConsumptionChart/WaterConsumptionChart.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
// import useWaterConsumptionData from '../../hooks/useWaterConsumptionData.js';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  // const data = useWaterConsumptionData();
  const data = [
    { date: '16', consumption: 500 },
    { date: '17', consumption: 400 },
    { date: '18', consumption: 2400 },
    { date: '19', consumption: 600 },
    { date: '20', consumption: 2000 },
    { date: '21', consumption: 1700},
    { date: '22', consumption: 250 },
  ];  
  return (
    <div className={css.trackerPageWrap}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <h1>Statistics</h1>
      <WaterConsumptionChart
       data={data} 
       />
    </div>
  );
};

export default TrackerPage;
