import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.WaterMainInfo}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};

export default WaterMainInfo;
