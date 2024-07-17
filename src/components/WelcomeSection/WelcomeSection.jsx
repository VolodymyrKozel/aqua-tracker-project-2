import Logo from '../../components/shared/Logo/Logo';
import Button from '../shared/Button/Button';
import css from './WelcomeSection.module.css';
import { useNavigate } from 'react-router';
function WelcomeSection() {
  const navigate = useNavigate();
  return (
    <section className={css.container}>
      <Logo />
      <div className={css.wrapper_welcome}>
        <p className={css.text}>Record daily water intake and track</p>
        <h1 className={css.title}>Water consumption tracker</h1>
        <div className={css.btnWrapper}>
          <Button variant="primary" onClick={() => navigate('/signup')}>
            Try tracker
          </Button>
          <Button variant="outline" onClick={() => navigate('/signin')}>
            Sign in
          </Button>
          {/* <WaterModal /> */}
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
