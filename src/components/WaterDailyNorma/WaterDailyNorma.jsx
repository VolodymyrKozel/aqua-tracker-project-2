import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  return (
    <div className={css.container}>
      <h2 className={css.volume}>1.5 L</h2>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
