import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.WaterMainInfo}>
      <div className={css.container}>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn
          buttonClassName={css.waterMainInfoButton}
          iconClassName={css.waterMainInfoIcon}
          spanClassName={css.waterMainInfoSpan}
          iconId="icon-only-plus"
          iconWidth={16}
          iconHeight={16}
        />
      </div>
    </div>
  );
};

export default WaterMainInfo;
