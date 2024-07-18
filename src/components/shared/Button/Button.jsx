import { forwardRef } from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

const Button = forwardRef(
  (
    {
      children,
      onClick,
      btnType = 'button',
      variant = 'primary',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={btnType}
        className={clsx(css.btn, css[variant], className)}
        onClick={onClick}
        ref={ref}
        disabled={props.disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
