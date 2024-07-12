import css from './HomePage.module.css';
import Logo from '../../components/shared/Logo/Logo';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const HomePage = () => {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.wrapper}>
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default HomePage;
