import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import { selectDailyWater } from '../../redux/water/selectors.js';
import { useEffect, useState } from 'react';

const WaterProgressBar = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const dailyWater = useSelector(selectDailyWater);

  const [waterAmount, setWaterAmount] = useState(0);

  useEffect(() => {
    if (dailyNorma > 0 && dailyWater.length > 0) {
      const totalWater = dailyWater.reduce((acc, water) => acc + water, 0);
      const procentWater = (totalWater / dailyNorma) * 100;
      setWaterAmount(procentWater > 100 ? 100 : procentWater);
    } else {
      setWaterAmount(0);
    }
  }, [dailyNorma, dailyWater]);

  const hideLabel = value => {
    return value === 0 || value === 50 || value === 100;
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
