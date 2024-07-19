import { Link } from 'react-router-dom';
import css from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={css.Welcome}>
      <h1 className={css.welcomeTitle}>Our Team</h1>
      <Link className={css.WelcomeLogoLink} to="/present/team"></Link>
    </div>
  );
};

export default Welcome;
