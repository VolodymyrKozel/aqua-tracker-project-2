import { Link } from 'react-router-dom';
import css from './Welcome.module.css';
import logoImage from '../images/GoFuture.jpg';

const Welcome = () => {
  return (
    <div className={css.Welcome}>
      <h1 className={css.welcomeTitle}>Brainstorm Bunch</h1>
      <Link className={css.WelcomeLogoLink} to="/present/team">
        <img
          className={css.WelcomeLogoImage}
          src={logoImage}
          alt="GoInFeature"
        />
      </Link>
    </div>
  );
};

export default Welcome;
