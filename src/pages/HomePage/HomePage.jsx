import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import WelcomeSection from 'components/WelcomeSection/WelcomeSection';

const HomePage = () => {
  return (
    <div className="section">
      <Logo />
      <WelcomeSection />
      <section className="AdvantagesSection"></section>
    </div>
  );
};

export default HomePage;
