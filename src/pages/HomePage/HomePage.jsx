import css from './HomePage.module.css';
import Logo from '../../components/Logo/Logo';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const HomePage = () => {
  return (
    <div className={css.container}>
      <Logo />
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
