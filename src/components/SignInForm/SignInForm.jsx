import { useTranslation } from 'react-i18next';
import css from './SignInForm.module.css';
import Logo from '../shared/Logo/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signIn } from '../../redux/users/operations';
import clsx from 'clsx';
import { useId } from 'react';
import { LoginUserSchema } from '../../validation/auth';
import Label from '../shared/Label/Label';
import Input from '../shared/Input/Input';
import Icon from '../shared/Icon/Icon';
import ErrorMessage from '../shared/errorMessage/ErrorMessage';
import { useToggle } from '../../hooks/useToggle';
import Button from '../shared/Button/Button';
import Loader from '../shared/Loader/Loader';
import { selectIsLoading } from '../../redux/users/selectors';

const SignInForm = () => {
  const { t } = useTranslation();
  const emailId = useId();
  const passwordId = useId();
  const { isOpen: showPassword, toggle: togglePassword } = useToggle();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
    dispatch(signIn(data));
    reset();
  };

  return (
    <div className={css.container}>
      <Logo className={css.logo} />
      <div className={css.flexContainer}>
        <div className={css.formContainer}>
          <h1 className={css.title}>{t('signinForm.signin')}</h1>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor={emailId}>{t('signinForm.email')}</Label>
            <Input
              className={clsx(css.input, errors.email && css.error)}
              type="email"
              id={emailId}
              {...register('email')}
              placeholder={t('signinForm.placeholderEmail')}
              autoComplete="on"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <Label htmlFor={passwordId}>{t('signinForm.password')}</Label>
            <div className={css.showPassword}>
              <Input
                className={clsx(css.input, errors.password && css.error)}
                type={showPassword ? 'text' : 'password'}
                id={passwordId}
                {...register('password')}
                placeholder={t('signinForm.placeholderPassword')}
                autoComplete="off"
              />
              <span
                title={showPassword ? t('click to hide password') : t('click to show password')}
                aria-label={showPassword ? t('click to hide password') : t('click to show password')}
              >
                <Icon
                  onClick={togglePassword}
                  className={css.icon}
                  id={showPassword ? 'icon-eye' : 'icon-eye-off'}
                />
              </span>
            </div>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <Button className={css.button} type="submit" onClick={handleSubmit(onSubmit)}>
              {t('signinForm.signin')}
              {isLoading && <Loader width={24} height={24} color={'#2f2f2f'} />}
            </Button>
          </form>
          <p className={css.afterDescription}>
            {t('signinForm.dontAccount')}
            <NavLink className={css.link} to={'/signup'}>
              {t('signinForm.signup')}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
