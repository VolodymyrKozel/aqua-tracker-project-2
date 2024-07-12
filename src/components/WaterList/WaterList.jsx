import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';

const WaterList = () => {
  return (
    <div className={css.waterListWrap}>
      <ul className={css.waterList}>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
      </ul>
    </div>
  );
};

export default WaterList;
