// import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './WaterForm.module.css';
import iconPlus from '../../../assets/images/icons.svg';
import iconMinus from '../../../assets/images/icons.svg';
import { useEffect } from 'react';
const schema = yup.object().shape({
  time: yup.string().required('Please, enter the recorded time!'),
  amount: yup
    .number()
    .min(1, 'Please, enter the amount between 1 and 5000 ml!')
    .max(5000, 'Please, enter the amount between 1 and 5000 ml!')
    .typeError('Please, enter the amount between 1 and 5000 ml!')
    .required('Please, enter the amount of water drunk!'),
});
const WaterForm = ({ onRequestClose, onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  const handleDecrementWaterAmount = () => {
    const currentValue = getValues('amount');
    if (currentValue > 50) {
      setValue('amount', currentValue - 50);
    }
  };
  const handleIncrementWaterAmount = () => {
    const currentValue = getValues('amount');
    if (currentValue < 5000) {
      setValue('amount', currentValue + 50);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.amountSection}>
        <p className={css.text}>Correct entered data:</p>
        <div className={css.amountWrap}>
          <button
            className={css.amountBtn}
            type="button"
            disabled={getValues('amount') <= 50}
            onClick={handleDecrementWaterAmount}
          >
            <svg className={css.icon} width="14" height="14">
              <use href={`${iconMinus}#icon-minus`}></use>
            </svg>
          </button>
          <span className={css.amount}>{`${watch('amount')} ml`}</span>
          <button
            className={css.amountBtn}
            type="button"
            disabled={getValues('amount') >= 5000}
            onClick={handleIncrementWaterAmount}
          >
            <svg className={css.icon} width="14" height="14">
              <use href={`${iconPlus}#icon-plus`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.inputWrap}>
        <label className={errors.time ? css.labelError : css.text}>
          Recording time:
          <input
            className={errors.time ? css.inputError : css.input}
            type="time"
            {...register('time')}
          />
          {errors.time && <p className={css.error}>{errors.time.message}</p>}
        </label>
        <label className={errors.amount ? css.labelError : css.text}>
          Enter the value of the water used:
          <input
            className={errors.amount ? css.inputError : css.input}
            type="number"
            {...register('amount')}
            onInput={e => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
          />
          {errors.amount && (
            <p className={css.error}>{errors.amount.message}</p>
          )}
        </label>
      </div>
      <button className={css.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
};
export default WaterForm;
