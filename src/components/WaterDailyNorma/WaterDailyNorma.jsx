import css from './WaterDailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectDailyWaterRate } from '../../redux/users/selectors.js';

const WaterDailyNorma = () => {
  const dailyNorma = useSelector(selectDailyWaterRate);

  return (
    <div className={css.containerDailyNorma}>
      <p className={css.volume}>{`${dailyNorma} L`}</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
