import { useTranslation } from 'react-i18next';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.generalSignUpInfo}>
      <SignUpForm />
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

export default SignUpPage;
