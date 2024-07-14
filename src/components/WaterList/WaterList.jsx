import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';

const WaterList = ({ items }) => {
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
        {/* {Array.isArray(items) &&
          items.map(item => (
            <li key={item.id} className={css.waterItem}>
              <WaterItem item={item} />
            </li> 
        ))}*/}
      </ul>
    </div>
  );
};

export default WaterList;
