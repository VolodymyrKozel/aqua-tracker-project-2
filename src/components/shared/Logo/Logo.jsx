import clsx from 'clsx';
import css from './Logo.module.css';
import { Link } from 'react-router-dom';
const Logo = ({ className }) => {
  return (
    <Link className={clsx(css.logo, className)} to="/">
      AQUATRACK
    </Link>
  );
};

export default Logo;
