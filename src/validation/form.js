import * as yup from 'yup';
export const userSettingsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required!')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than or equal to 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[^@]+@[^@]+\.[^@]+$/, 'Email must be valid'),
  weight: yup
    .number()
    .typeError(' must be a number')
    .min(0, 'weight must be 0 or more')
    .max(200, 'Weight must be less than or equal to 200'),
  activeTimeSport: yup
    .number()
    .typeError('Active sport time must be a number')
    .min(0, 'Time active sport must be positive number')
    .max(1000, 'Time must be less than or equal to 1000'),
  dailyWaterRate: yup
    .number()
    .typeError(' must be a number')
    .positive('Water consumption must be a positive number')
    .max(10000, 'Water consumption must be less than or equal to 10000'),
  gender: yup.string().oneOf(['woman', 'man', '']).nullable(),
});
