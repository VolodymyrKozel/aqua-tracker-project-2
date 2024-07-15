import * as yup from 'yup';

export const LoginUserSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(16, 'Password should be of maximum 16 characters length'),
});

export const registerUserSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email!')
    .required('Email is required!'),
  password: yup
    .string()
    .min(8, 'Password must be at least ${min} characters long!')
    .max(20, 'Password must be no more than ${max} characters long!')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter!')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter!')
    .matches(/[0-9]/, 'Password must contain at least one number!')
    .required('Password is required!'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat Password is required'),
});
