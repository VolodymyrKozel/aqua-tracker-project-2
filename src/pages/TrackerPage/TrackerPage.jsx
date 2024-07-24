import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterDetailedInfoChart from '../../components/WaterDetailedInfoChart/WaterDetailedInfoChart.jsx';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import { motion } from 'framer-motion';


const TrackerPage = () => {
  return (
    <div className={css.trackerPageContainer}>
      <WaterMainInfo />
      <motion.div
        className={css.trackerPageWrap}
        initial={{ y: '-100vw' }} // Start off-screen to the right
        animate={{ y: 0 }} // Animate to the center
        exit={{ y: '100vw' }} // Exit off-screen to the left
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <WaterDetailedInfo />
      </motion.div>
      {/* <div className={css.trackerPageWrap}>
        <WaterMainInfo />
        <WaterDetailedInfoChart />
      </div> */}
    </div>
  );
};

export default TrackerPage;
