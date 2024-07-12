import css from './WaterItem.module.css';
import IconGlass from './IconGlass';
import IconEdit from './IconEdit.jsx';
import IconTrash from './IconTrash.jsx';

const WaterItem = () => {
  return (
    <div className={css.waterItem}>
      <IconGlass className={css.waterIconGlass} />
      <div className={css.waterItemWrap}>
        <p className={css.waterItemMl}>250 ml</p>
        <p className={css.waterItemData}>data</p>
      </div>
      <div className={css.waterItemBtnWrap}>
        <button type="button" className={css.waterItemBtn}>
          <IconEdit className={css.waterIconBtn} />
        </button>
        <button type="button" className={css.waterItemBtn}>
          <IconTrash className={css.waterIconBtn} />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
