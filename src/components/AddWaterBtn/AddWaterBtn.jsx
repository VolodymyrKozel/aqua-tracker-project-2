import { IconPlusWater } from '../DailyInfo/IconPlusWater.jsx';
import Button from '../shared/Button/Button.jsx';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({
  buttonClassName,
  iconClassName,
  spanClassName,
  iconId,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div>
      <Button
        variant=".outline"
        className={`${css.addWaterButton} ${buttonClassName}`}
      >
        <IconPlusWater
          className={`${css.iconPlusWater} ${iconClassName}`}
          iconId={iconId}
          width={iconWidth}
          height={iconHeight}
        />
        <span className={`${css.addWaterSpan} ${spanClassName}`}>
          Add water
        </span>
      </Button>
    </div>
  );
};

export default AddWaterBtn;
