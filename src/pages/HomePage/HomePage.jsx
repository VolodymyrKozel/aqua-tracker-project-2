import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
