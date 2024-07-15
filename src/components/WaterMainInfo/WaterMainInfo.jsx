import { useTranslation } from 'react-i18next';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={css.WaterMainInfo}>
      <div className={css.container}>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtn
          buttonClassName={css.waterMainInfoButton}
          iconClassName={css.waterMainInfoIcon}
          spanClassName={css.waterMainInfoSpan}
          iconId="icon-only-plus"
          iconWidth={16}
          iconHeight={16}
          text={t('trackerPage.addWater')}
        />
      </div>
    </div>
  );
};

export default WaterMainInfo;
