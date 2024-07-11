import * as yup from 'yup';

export const LoginUserSchema = yup.object().shape({
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
