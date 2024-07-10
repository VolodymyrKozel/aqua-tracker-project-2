import css from './SignInForm.module.css';
import Logo from '../Logo/Logo';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { login } from '../../redux/auth/operations';
import clsx from 'clsx';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 6 characters length')
    .max(16, 'Password should be of maximum 16 characters length'),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log("Form Data:", data); 
    dispatch(login(data));
    reset();
  };

  const handFocus = fieldName => {
    console.log(`${fieldName} field focused`); 
    clearErrors(fieldName);
  };

  return (
    <div className={css.mainLoginContainer}>
      <Logo />
      <div className={css.loginFormContainer}>
        <h1 className={css.title}>Sign in</h1>
        <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={css.fieldLabel}>Email</label>
          <div className={css.inputField}>
            <input
               className={clsx(css.input, { [css.error]: errors.email })}
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              autoComplete="on"
              onFocus={() => handFocus('email')}
            />
          {errors.email && ( 
              <span className={css.errors}>{errors.email.message}</span>
            )}
          </div>
          <label className={css.fieldLabel}>Password</label>
          <div className={css.inputField}>
            <input
            className={clsx(css.input, { [css.error]: errors.password })}
              type="password"
              {...register('password')}
              placeholder="Enter your password"
              onFocus={() => handFocus('password')}
            />
           {errors.password && ( 
              <span className={css.errors}>{errors.password.message}</span>
            )}
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
