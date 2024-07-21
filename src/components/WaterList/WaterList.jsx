import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';
import {
  selectDailyWater,
  selectIsLoading,
} from '../../redux/water/selectors.js';
import { useSelector } from 'react-redux';
const WaterList = ({ selectedDate }) => {
  const isLoading = useSelector(selectIsLoading);
  const { arrDailyWater = [] } = useSelector(selectDailyWater) || {};
  console.log('arrDailyWater: ', arrDailyWater);
  return (
    <>
      {!Array.isArray(arrDailyWater) || !arrDailyWater.length ? (
        <div className={css.noWaterAdded}>
          You haven&apos;t had any water today. Start now!
        </div>
      ) : (
        <div className={css.waterListWrap}>
          <ul className={css.waterList}>
            {arrDailyWater.map(item => (
              <li key={item._id + item.volume} className={css.waterItem}>
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
