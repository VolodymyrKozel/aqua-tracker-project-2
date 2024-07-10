import Button from '../../components/Button/Button';
import css from './WelcomeSection.module.css';
import { useNavigate } from 'react-router';
function WelcomeSection() {
  const navigate = useNavigate();
  return (
    <section className={css.container}>
      <p className={css.text}>Record daily water intake and track</p>
      <h1 className={css.title}>Water consumption tracker</h1>
      <Button variant="primary" onClick={() => navigate('/signup')}>
        Try tracker
      </Button>
      <Button variant="outline" onClick={() => navigate('/signin')}>
        Sign in
      </Button>
    </section>
  );
}

export default WelcomeSection;
