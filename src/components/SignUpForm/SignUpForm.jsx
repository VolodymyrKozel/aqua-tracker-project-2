import { useTranslation } from 'react-i18next';
import Logo from '../shared/Logo/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/users/selectors';
import { signUp } from '../../redux/users/operations';
import { NavLink } from 'react-router-dom';
import { registerUserSchema } from '../../validation/auth';
import { useId } from 'react';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import ErrorMessage from '../shared/errorMessage/ErrorMessage';
import Loader from '../shared/Loader/Loader';
import css from './SignUpForm.module.css';
import clsx from 'clsx';
import Icon from '../shared/Icon/Icon';
import { useToggle } from '../../hooks/useToggle';

const SignUpForm = () => {
  const { t } = useTranslation();
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();
  const { isOpen: showPassword, toggle: togglePassword } = useToggle();
  const { isOpen: showRepeatPassword, toggle: toggleRepeatPassword } =
    useToggle();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerUserSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = data => {
    const { repeatPassword, ...rest } = data;
    dispatch(signUp(rest));
    reset();
  };
  return (
    <div className={css.container}>
      <Logo className={css.logo} />

      <div className={css.flexContainer}>
        <div className={css.formContainer}>
          <h1 className={css.title}>{t('signupForm.signup')}</h1>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor={emailId}>{t('signupForm.email')}</Label>
            <Input
              className={clsx(css.input, errors.email && css.error)}
              type="email"
              id={emailId}
              {...register('email')}
              placeholder={t('signupForm.placeholderEmail')}
              autoComplete="on"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}

            <Label htmlFor={passwordId}>{t('signupForm.password')}</Label>
            <div className={css.showPassword}>
              <Input
                className={clsx(css.input, errors.password && css.error)}
                type={showPassword ? 'text' : 'password'}
                id={passwordId}
                {...register('password')}
                placeholder={t('signupForm.placeholderPassword')}
                autoComplete="off"
              />
              <span
                title={
                  showPassword
                    ? 'click to hide password'
                    : 'click to show password'
                }
                aria-label={
                  showPassword
                    ? 'click to hide password'
                    : 'click to show password'
                }
              >
                <Icon
                  onClick={togglePassword}
                  className={css.icon}
                  id={showPassword ? 'icon-eye' : 'icon-eye-off'}
                />
              </span>
            </div>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}

            <Label htmlFor={repeatPasswordId}>{t('signupForm.repeat')}</Label>
            <div className={css.showPassword}>
              <Input
                className={clsx(css.input, errors.repeatPassword && css.error)}
                type={showRepeatPassword ? 'text' : 'password'}
                id={repeatPasswordId}
                {...register('repeatPassword')}
                placeholder={t('signupForm.placeholderPasswordRepeat')}
                autoComplete="off"
              />
              <span
                title={
                  showRepeatPassword
                    ? 'click to hide password'
                    : 'click to show password'
                }
                aria-label={
                  showRepeatPassword
                    ? 'click to hide password'
                    : 'click to show password'
                }
              >
                <Icon
                  onClick={toggleRepeatPassword}
                  className={css.icon}
                  id={showRepeatPassword ? 'icon-eye' : 'icon-eye-off'}
                />
              </span>
            </div>
            {errors.repeatPassword && (
              <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
            )}
            <Button
              className={css.button}
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {t('signupForm.signup')}
              {isLoading && <Loader width={24} height={24} color={'#2f2f2f'} />}
            </Button>
          </form>
          <p className={css.afterDescription}>
            {t('signupForm.haveAccount')}?{' '}
            <NavLink className={css.link} to={'/signin'}>
              {t('signupForm.signin')}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
