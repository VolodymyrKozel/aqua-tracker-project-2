import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { closeModal } from '../../redux/modal/slice.js';
import { addWater, updateWater } from '../../redux/aqua/operations.js';
import { selectModalState } from '../../redux/modal/selector.js';
import { selectWaterDataDay, selectDay } from '../../redux/aqua/selectors.js';

import iconPlus from '../../assets/images/icons.svg';
import iconMinus from '../../assets/images/icons.svg';

import { errorToast, successToast } from '../../helpers/toast.js';

import css from '../WaterForm/WaterForm.module.css';

const schema = yup.object().shape({
  time: yup.string().required('Please, enter the recorded time!'),
  amount: yup
    .number()
    .min(1, 'Please, enter the amount between 1 and 5000 ml!')
    .max(5000, 'Please, enter the amount between 1 and 5000 ml!')
    .typeError('Please, enter the amount between 1 and 5000 ml!')
    .required('Please, enter the amount of water drunk!'),
});
const date = new Date();
const time = date.toLocaleTimeString().slice(0, -3);
const defaultValues = {
  time: time,
  amount: 50,
};

export default function WaterForm() {
  const { modalType, props: selectedWaterRecordId } =
    useSelector(selectModalState);
  const waterDataDay = useSelector(selectWaterDataDay);
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    getValues,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (selectedWaterRecordId) {
      const index = waterDataDay.findIndex(
        water => water._id === selectedWaterRecordId
      );
      if (index !== -1) {
        setValue('time', waterDataDay[index].time);
        setValue('amount', waterDataDay[index].amount);
      }
    } else {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      });

      setValue('time', formattedTime);
      setValue('amount', 50);
    }
  }, [selectedWaterRecordId, waterDataDay, setValue]);

  const handleDerementWaterAmount = () => {
    const currentValue = getValues('amount');
    setValue('amount', currentValue - 50);
  };

  const handleIncrementWaterAmount = () => {
    const currentValue = getValues('amount');
    setValue('amount', currentValue + 50);
  };
  const selectDate = useSelector(selectDay);

  const onSubmit = values => {
    try {
      if (modalType === 'WaterModalAdd') {
        const FormDataToAdd = {
          year: selectDate.year,
          month: selectDate.month,
          day: selectDate.day,
          ...values,
        };
        dispatch(addWater(FormDataToAdd));
        successToast('Water card has been added successfully!');
      } else {
        const FormDataToUpdate = {
          id: selectedWaterRecordId,

          waterData: {
            amount: values.amount,
            time: values.time,
          },
        };

        dispatch(updateWater(FormDataToUpdate));
        successToast('Water card has been updated successfully!');
      }

      dispatch(closeModal());
    } catch (error) {
      errorToast('Runtime error:', error.message);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.text}>Amount of water:</p>
      <div className={css.amountWrap}>
        <button
          className={css.amountBtn}
          type="button"
          disabled={getValues('amount') === 0 ? true : false}
          onClick={handleDerementWaterAmount}
        >
          <svg className={css.icon} width="14" height="14">
            <use href={`${iconMinus}#icon-minus`}></use>
          </svg>
        </button>

        <span className={css.amount}>{`${watch('amount')} ml`}</span>

        <button
          className={css.amountBtn}
          type="button"
          disabled={getValues('amount') === 5000 ? true : false}
          onClick={handleIncrementWaterAmount}
        >
          <svg className={css.icon} width="14" height="14">
            <use href={`${iconPlus}#icon-plus`}></use>
          </svg>
        </button>
      </div>

      <div className={css.inputWrap}>
        <label className={errors.time ? css.labelError : css.label}>
          <span className={css.timeSpan}> Recording time:</span>
          <input
            className={errors.time ? css.inputError : css.input}
            type="time"
            name="time"
            {...register('time')}
          />
        </label>
        {errors.time && <p className={css.error}>{errors.time.message}</p>}

        <label className={errors.amount ? css.labelError : css.label}>
          <span className={css.amountSpan}>
            Enter the value of the water used:
          </span>
          <input
            className={errors.amount ? css.inputError : css.input}
            type="number"
            name="amount"
            {...register('amount')}
            onInput={e => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
          />
        </label>
        {errors.amount && <p className={css.error}>{errors.amount.message}</p>}
      </div>
      <button className={css.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
}
