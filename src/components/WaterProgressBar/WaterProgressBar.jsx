import { useTranslation } from 'react-i18next';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  const { t } = useTranslation();
  const waterAmount = 70;

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.day}>{t('trackerPage.today')}</h2>

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
                <span className={css.waterProgressBarLabel}>
                  {`${Math.round(waterAmount)}%`}
                </span>
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
