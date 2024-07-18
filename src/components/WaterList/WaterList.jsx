import { useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';
import { selectDailyWater } from '../../redux/water/selectors.js';

const WaterList = () => {
  const { arrDailyWater = [] } = useSelector(selectDailyWater) || {};

  return (
    <>
      {!Array.isArray(arrDailyWater) && !arrDailyWater.length ? (
        <div className={css.noWaterAdded}>
          You haven&apos;t had any water today. Start now!
        </div>
      ) : (
        <div className={css.waterListWrap}>
          <ul className={css.waterList}>
            {arrDailyWater.map(item => (
              <li key={item.volume} className={css.waterItem}>
                <WaterItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default WaterList;
