import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import Logo from '../shared/Logo/Logo.jsx';
import css from './WaterMainInfo.module.css';
import { motion } from 'framer-motion';

const WaterMainInfo = () => {
  return (
    <motion.div
      className={css.WaterMainInfo}
      initial={{ y: '100vw' }} // Start off-screen to the right
      animate={{ y: 0 }} // Animate to the center
      exit={{ y: '100vw' }} // Exit off-screen to the left
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className={css.logoContainer}>
        <div className="reactour__Bye">
          <Logo />
        </div>
      </div>
      <WaterDailyNorma />
      <WaterProgressBar />
      <div className={css.buttonContainer}>
        <AddWaterBtn
          buttonClassName={css.waterMainInfoButton}
          iconClassName={css.waterMainInfoIcon}
          spanClassName={css.waterMainInfoSpan}
          iconId="icon-only-plus"
          iconWidth={16}
          iconHeight={16}
        />
      </div>
    </motion.div>
  );
};

export default WaterMainInfo;
