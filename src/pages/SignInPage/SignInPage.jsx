import { useTranslation } from 'react-i18next';
import SignInForm from '../../components/SignInForm/SignInForm';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.generalSignInInfo}>
      <SignInForm />
      <div className={css.advantagesSection}>
        <AdvantagesSection
          habitText={t('advantagesSection.habit')}
          statisticsText={t('advantagesSection.statistics')}
          rateText={t('advantagesSection.rate')}
        />
      </div>
    </div>
  );
};

export default SignInPage;
