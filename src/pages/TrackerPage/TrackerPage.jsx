import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterDetailedInfoChart from '../../components/WaterDetailedInfoChart/WaterDetailedInfoChart.jsx';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <div className={css.trackerPageContainer}>
      <div className={css.trackerPageWrap}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
      <div className={css.trackerPageWrap}>
        <WaterMainInfo />
        <WaterDetailedInfoChart />
      </div>
    </div>
  );
};

export default TrackerPage;
