import * as yup from 'yup';
import i18n from 'i18next';

const { t } = i18n;

export const LoginUserSchema = yup.object().shape({
  email: yup
    .string()
    .email(t('errors.email.invalid'))
    .required(t('errors.email.required')),
  password: yup
    .string()
    .required(t('errors.password.required'))
    .min(8, t('errors.password.min', { min: 8 }))
    .max(16, t('errors.password.max', { max: 16 })),
});

export const registerUserSchema = yup.object().shape({
  email: yup
    .string()
    .email(t('errors.email.invalid'))
    .required(t('errors.email.required')),
  password: yup
    .string()
    .min(8, t('errors.password.min', { min: 8 }))
    .max(20, t('errors.password.max', { max: 20 }))
    .matches(/[A-Z]/, t('errors.password.uppercase'))
    .matches(/[a-z]/, t('errors.password.lowercase'))
    .matches(/[0-9]/, t('errors.password.number'))
    .required(t('errors.password.required')),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], t('errors.repeatPassword.match'))
    .required(t('errors.repeatPassword.required')),
});
