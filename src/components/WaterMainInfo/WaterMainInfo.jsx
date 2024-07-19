import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import Logo from '../shared/Logo/Logo.jsx';
import css from './WaterMainInfo.module.css';
import { logOut } from '../../redux/users/operations.js';
import { useDispatch } from 'react-redux';

const WaterMainInfo = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.WaterMainInfo}>
      <div className={css.logoContainer}>
        <Logo />
      </div>
      <WaterDailyNorma />
      <WaterProgressBar />
      <div className={css.buttonContainer}>
        <AddWaterBtn
          onClick={() => dispatch(logOut())}
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
