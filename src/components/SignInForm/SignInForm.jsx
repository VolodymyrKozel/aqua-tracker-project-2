import css from './SignInForm.module.css';
import Logo from '../Logo/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import clsx from 'clsx';
import { useState } from 'react';
import { LoginUserSchema } from '../../validation/auth';


const SignInForm = () => {
   const dispatch = useDispatch(); 
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginUserSchema),
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
     dispatch(logIn(data)); 
    reset();
  };

  return (
    <div className={css.mainLoginContainer}>
      <Logo />
      <div className={css.loginFormContainer}>
        <h1 className={css.title}>Sign in</h1>
        <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.fieldLabel} htmlFor="email">
            Email
          </label>
          <div className={css.inputField}>
            <input
              className={clsx(css.input, { [css.error]: errors.email })}
              type="email"
              id="email"
              {...register('email')}
              placeholder="Enter your email"
              autoComplete="on"
            />
            {errors.email && (
              <span className={css.errors}>{errors.email.message}</span>
            )}
          </div>
          <label className={css.fieldLabel}>Password</label>
          <div className={css.inputField}>
            <input
              className={clsx(css.input, { [css.error]: errors.password })}
              type={showPassword ? "text" : "password"}
              {...register('password')}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className={css.errors}>{errors.password.message}</span>
            )}
            <svg
              className={css.icon_eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              <use
                width={20}
                height={20}
                xlinkHref={
                  showPassword
                    ? '../../../public/icons.svg#icon-eye'
                    : '../../../public/icons.svg#icon-eye-off'
                }
              ></use>
            </svg>
          </div>
          <button className={css.button} type="submit">
            Sign In
          </button>
        </form>
        <p className={css.afterDescription}>
          Don’t have an account?
          <NavLink className={css.link} to={'/signup'}>
            {' '}
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
