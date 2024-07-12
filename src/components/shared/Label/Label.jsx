import clsx from 'clsx';
import css from './Label.module.css';

const Label = ({ children, className, ...props }) => {
  return (
    <label className={clsx(css.label, className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
