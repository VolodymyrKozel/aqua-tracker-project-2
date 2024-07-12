import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  return (
    <div>
      <Button variant=".outline" className={css.addWaterButton}>
        <IconPlusWater className={css.iconPlusWater} />
        <span className={css.addWaterSpan}>Add water</span>
      </Button>
    </div>
  );
};

export default AddWaterBtn;
