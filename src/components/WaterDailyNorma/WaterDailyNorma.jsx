import css from './WaterDailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/users/selectors.js';
import { useTranslation } from 'react-i18next';

const WaterDailyNorma = () => {
  const { t } = useTranslation();

  const dailyNorma = useSelector(selectDailyNorma);

  return (
    <div className={css.containerDailyNorma}>
      <div className="reactour__waterDailyNorma">
        <p className={css.volume}>{`${dailyNorma / 1000} ${t(
          'trackerPage.liter'
        )}`}</p>
        <p className={css.text}>{t('trackerPage.dailyNorma')}</p>
      </div>
    </div>
  );
};

export default WaterDailyNorma;
