import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import {
  selectDailyWater,
  selectPercentageWater,
} from '../../redux/water/selectors.js';
import { useEffect, useState } from 'react';

const WaterProgressBar = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const dailyWater = useSelector(selectDailyWater);
  const percentageWater = useSelector(selectPercentageWater);

  const [waterAmount, setWaterAmount] = useState(0);

  useEffect(() => {
    if (dailyNorma && dailyWater.length > 0) {
      setWaterAmount(percentageWater > 100 ? 100 : percentageWater);
    } else {
      setWaterAmount(0);
    }
  }, [dailyNorma, dailyWater, percentageWater]);

  const hideLabel = value => {
    return value < 15 || (value >= 35 && value <= 60) || value > 80;
  };

  return (
    <div className={css.containerProgressBar}>
      <div className={css.container}>
        <h2 className={css.day}>Today</h2>

        <div className={css.waterProgressBarWrapper}>
          <div className={css.waterProgressBar}>
            <div
              className={css.waterProgressBarFiller}
              style={{
                width: `${waterAmount}%`,
              }}
            >
              <div className={css.waterProgressBarContent}>
                <svg className={css.icon} width={12} height={12}>
                  <use href="/src/assets/images/icons.svg#icon-ellipse"></use>
                </svg>
                {!hideLabel(Math.round(waterAmount)) && (
                  <span className={css.waterProgressBarLabel}>
                    {`${Math.round(waterAmount)}%`}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={css.labelContainer}>
          <span className={css.label}>0%</span>
          <span className={css.label}>50%</span>
          <span className={css.label}>100%</span>
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
