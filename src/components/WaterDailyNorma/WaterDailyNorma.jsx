import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const dailyNorma = 1.5;

  return (
    <div className={css.container}>
      <p className={css.volume}> {dailyNorma ? `${dailyNorma}` : '0'} L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
