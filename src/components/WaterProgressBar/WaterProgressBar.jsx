import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.day}>Today</h2>
        <div className={css.slider}>
          <svg width={12} height={12}>
            <use href="/public/icons.svg/#icon-ellipse"></use>
          </svg>
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
