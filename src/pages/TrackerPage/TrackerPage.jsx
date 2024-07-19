import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <div className={css.trackerPageWrap}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
