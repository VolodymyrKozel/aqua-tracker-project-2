import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.day}>Today</h2>
        <input
          type="range"
          id="water-slider"
          min="0"
          max="100"
          // value="50"
          className={css.slider}
        />
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
