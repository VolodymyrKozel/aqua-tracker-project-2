import clsx from 'clsx';
import css from './Button.module.css';

function Button({
  children,
  onClick,
  btnType = 'button',
  variant = 'primary',
  ...props
}) {
  return (
    <button
      type={btnType}
      className={clsx(css.btn, css[variant])}
      onClick={onClick}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
}

export default Button;
