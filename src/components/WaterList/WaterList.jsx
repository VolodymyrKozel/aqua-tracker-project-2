import WaterItem from '../WaterItem/WaterItem.jsx';
import Loader from '../../components/shared/Loader/Loader.jsx';
import css from './WaterList.module.css';
import { motion } from 'framer-motion';
import {
  selectDailyWater,
  selectIsLoading,
} from '../../redux/water/selectors.js';
import { useSelector } from 'react-redux';
const WaterList = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state
    visible: { opacity: 1, scale: 1 }, // Final state
  };
  const isLoading = useSelector(selectIsLoading);
  const arrDailyWater = useSelector(selectDailyWater);
  return isLoading ? (
    <Loader variant="center" className={css.loader} />
  ) : !Array.isArray(arrDailyWater) || !arrDailyWater.length ? (
    <div className={css.noWaterAdded}>
      You haven&apos;t had any water today. Start now!
    </div>
  ) : (
    <div className={css.waterListWrap}>
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }, // Stagger children animations
        }}
        className={css.waterList}
      >
        {arrDailyWater.map(item => (
          <motion.li
            variants={itemVariants}
            key={item._id + item.volume}
            className={css.waterItem}
          >
            <WaterItem item={item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default WaterList;
