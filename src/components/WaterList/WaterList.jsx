import { useSelector } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './WaterList.module.css';
/* import { selectMonthlyWater } from '../../redux/water/selectors.js'; */
import { useEffect, useState } from 'react';

const WaterList = () => {
  const waterItemsStore = [];
  /*  = useSelector(selectMonthlyWater); */
  const [waterItems, setWaterItems] = useState([]);

  useEffect(() => {
    setWaterItems(waterItemsStore);
  }, [waterItemsStore]);

  return (
    <>
      {
        /* !Array.isArray(waterItems) || */ !waterItems.length ? (
          <div className={css.noWaterAdded}>
            You haven't had any water today. Start now!
          </div>
        ) : (
          <div className={css.waterListWrap}>
            <ul className={css.waterList}>
              {waterItems.map(item => (
                <li key={item._id} className={css.waterItem}>
                  <WaterItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
};

export default WaterList;
