import Logo from '../../components/shared/Logo/Logo';
import Button from '../shared/Button/Button';
import css from './WelcomeSection.module.css';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

function WelcomeSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className={css.container}>
      <Logo />
      <div className={css.wrapper_welcome}>
        <p className={css.text}>{t('welcomeSection.recordDaily')}</p>
        <h1 className={css.title}>{t('welcomeSection.waterTracker')}</h1>
        <div className={css.btnWrapper}>
          <Button variant="primary" onClick={() => navigate('/signup')}>
            {t('welcomeSection.try')}
          </Button>
          <Button variant="outline" onClick={() => navigate('/signin')}>
            {t('welcomeSection.signin')}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
