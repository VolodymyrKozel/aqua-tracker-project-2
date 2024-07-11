import clsx from 'clsx';
import { forwardRef } from 'react';
import css from './Input.module.css';

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx(css.input, className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
