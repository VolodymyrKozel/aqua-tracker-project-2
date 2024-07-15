import { useTranslation } from 'react-i18next';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const { t } = useTranslation();
  const dailyNorma = 1.5;

  return (
    <div className={css.container}>
      <p className={css.volume}>{dailyNorma ? `${dailyNorma}` : '0'} {t('trackerPage.liter')}</p>
      <p className={css.text}>{t('trackerPage.dailyNorma')}</p>
    </div>
  );
};

export default WaterDailyNorma;
