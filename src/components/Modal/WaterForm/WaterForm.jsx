// // import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import css from './WaterForm.module.css';
// import iconPlus from '../../../assets/images/icons.svg';
// import iconMinus from '../../../assets/images/icons.svg';
// import { useEffect } from 'react';
// const schema = yup.object().shape({
//   time: yup.string().required('Please, enter the recorded time!'),
//   amount: yup
//     .number()
//     .min(1, 'Please, enter the amount between 1 and 5000 ml!')
//     .max(5000, 'Please, enter the amount between 1 and 5000 ml!')
//     .typeError('Please, enter the amount between 1 and 5000 ml!')
//     .required('Please, enter the amount of water drunk!'),
// });
// const WaterForm = ({  onSubmit, defaultValues }) => {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues,
//   });
//   useEffect(() => {
//     reset(defaultValues);
//   }, [defaultValues, reset]);
//   const handleDecrementWaterAmount = () => {
//     const currentValue = getValues('amount');
//     if (currentValue > 50) {
//       setValue('amount', currentValue - 50);
//     }
//   };
//   const handleIncrementWaterAmount = () => {
//     const currentValue = getValues('amount');
//     if (currentValue < 5000) {
//       setValue('amount', currentValue + 50);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
//       <div className={css.amountSection}>
//         <p className={css.text}>Correct entered data:</p>
//         <div className={css.amountWrap}>
//           <button
//             className={css.amountBtn}
//             type="button"
//             disabled={getValues('amount') <= 50}
//             onClick={handleDecrementWaterAmount}
//           >
//             <svg className={css.icon} width="14" height="14">
//               <use href={`${iconMinus}#icon-minus`}></use>
//             </svg>
//           </button>
//           <span className={css.amount}>{`${watch('amount')} ml`}</span>
//           <button
//             className={css.amountBtn}
//             type="button"
//             disabled={getValues('amount') >= 5000}
//             onClick={handleIncrementWaterAmount}
//           >
//             <svg className={css.icon} width="14" height="14">
//               <use href={`${iconPlus}#icon-plus`}></use>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className={css.inputWrap}>
//         <label className={errors.time ? css.labelError : css.text}>
//           Recording time:
//           <input
//             className={errors.time ? css.inputError : css.input}
//             type="time"
//             {...register('time')}
//           />
//           {errors.time && <p className={css.error}>{errors.time.message}</p>}
//         </label>
//         <label className={errors.amount ? css.labelError : css.text}>
//           Enter the value of the water used:
//           <input
//             className={errors.amount ? css.inputError : css.input}
//             type="number"
//             {...register('amount')}
//             onInput={e => {
//               e.target.value = e.target.value.replace(/[^0-9]/g, '');
//             }}
//           />
//           {errors.amount && (
//             <p className={css.error}>{errors.amount.message}</p>
//           )}
//         </label>
//       </div>
//       <button className={css.saveBtn} type="submit">
//         Save
//       </button>
//     </form>
//   );
// };
// export default WaterForm;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Label from '../../shared/Label/Label';
import Input from '../../shared/Input/Input';
import ErrorMessage from '../../shared/errorMessage/ErrorMessage';
import Button from '../../shared/Button/Button';
// import Input from '../shared/Input/Input';
// import Button from '../shared/Button/Button';
// import Label from '../shared/Label/Label';
// import ErrorMessage from '../shared/errorMessage/ErrorMessage';

// Определение схемы валидации с помощью yup
const WaterFormSchema = yup.object().shape({
  time: yup.string().required('Пожалуйста, введите время записи'),
  waterValue: yup.number().required('Пожалуйста, введите значение воды').positive('Значение должно быть положительным'),
});

const WaterForm = ({header, subheader}) => {
  const [amount, setAmount] = useState(50); // Начальное значение
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(WaterFormSchema),
    mode: 'onBlur',
    defaultValues: {
      time: '7:00',
      waterValue: amount,
    },
  });

  const onSubmit = data => {
    console.log('Water Form Data:', data);
    reset();
  };

  const handleFocus = fieldName => {
    clearErrors(fieldName);
  };

  const increaseAmount = () => {
    setAmount(prevAmount => prevAmount + 50);
  };

  const decreaseAmount = () => {
    setAmount(prevAmount => (prevAmount > 50 ? prevAmount - 50 : 50));
  };

  // const header = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
  // const subheader = operationType === 'add' ? 'Choose a value:' : 'Correct entered data:';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{header}</h1>
      <p>{subheader}</p>

      <Label>Amount of water:</Label>
      <div className="amount-control">
        <button type="button" onClick={decreaseAmount}>−</button>
        <span>{amount} ml</span>
        <button type="button" onClick={increaseAmount}>+</button>
      </div>

      <Label htmlFor="time">Recording time:</Label>
      <Input
        type="text"
        id="time"
        {...register('time')}
        placeholder="Enter recording time"
        onFocus={() => handleFocus('time')}
        className={errors.time && 'error'}
      />
      {errors.time && <ErrorMessage>{errors.time.message}</ErrorMessage>}

      <Label htmlFor="waterValue">Enter the value of the water used:</Label>
      <Input
        type="number"
        id="waterValue"
        {...register('waterValue')}
        value={amount}
        placeholder="Enter the value of the water used"
        onFocus={() => handleFocus('waterValue')}
        className={errors.waterValue && 'error'}
      />
      {errors.waterValue && <ErrorMessage>{errors.waterValue.message}</ErrorMessage>}

      <Button type="submit" variant="primary">Save</Button>
    </form>
  );
};

export default WaterForm;
