import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
     <WelcomeSection
        recordDaily={t('welcomeSection.recordDaily')}
        waterTracker={t('welcomeSection.waterTracker')}
        try={t('welcomeSection.try')}
        signin={t('welcomeSection.signin')}
      />
      <AdvantagesSection
        habitText={t('advantagesSection.habit')}
        statisticsText={t('advantagesSection.statistics')}
        rateText={t('advantagesSection.rate')}
      />
    </div>
  );
};

export default HomePage;
