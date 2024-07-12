import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';

const WaterList = () => {
  return (
    <div className={css.waterListWrap}>
      {/* {!waterItem.length & (
      <div className={css.noWater}>You haven't added the water yet.</div>
      ) : ( */}
      <ul className={css.waterList}>
        <li className={css.waterItem}>
          <WaterItem />
        </li>
        {/* ))} */}
      </ul>
      {/* )} */}
    </div>
  );
};

export default WaterList;
