import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <section className={css.sectionWaterDetailInfo}>
      WaterDetailedInfo
      <div className={css.waterDetailInfoContainer}>
        <UserPanel />
        <DailyInfo />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
