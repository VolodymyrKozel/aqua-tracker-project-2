import WaterConsumptionChart from '../../components/WaterConsumptionChart/WaterConsumptionChart.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
// import useWaterConsumptionData from '../../hooks/useWaterConsumptionData.js';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  // const data = useWaterConsumptionData();
  const data = [
    { date: '16', consumption: 2.0 },
    { date: '17', consumption: 1.8 },
    { date: '18', consumption: 2.3 },
    { date: '19', consumption: 1.6 },
    { date: '20', consumption: 2.1 },
    { date: '21', consumption: 1.7 },
    { date: '22', consumption: 2.4 },
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
