import { useEffect, useId, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectUser } from '../../redux/auth/selectors';
import { updateUserInfo } from '../../redux/auth/operations';
import { closeModal } from '../../redux/modal/slice';

/* import { errorToast, successToast } from '../../helpers/toast'; */
import Icon from '../shared/Icon/Icon';
import { userSettingsSchema } from '../../validation/form';

import css from '../UserSettingsForm/UserSettingsForm.module.css';
import Loader from '../shared/Loader/Loader';

export default function UserSettingsForm() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const avatarURL = user.avatarURL;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(userSettingsSchema),
    defaultValues: {
      name: '',
      email: '',
      gender: '',
      weight: 0,
      activeTimeSport: 0,
      dailyWaterRate: 0,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setValue('name', user.name || '');
      setValue('email', user.email || '');
      setValue('weight', user.weight || 0);
      setValue('activeTimeSport', user.activeTimeSport || 0);
      setValue('dailyWaterRate', user.dailyWaterRate || 0);
      setValue('gender', user.gender || '');
    }
  }, [user, setValue]);
  const nameId = useId();
  const emailId = useId();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // объект ссылки для получения доступа к инпуту файла

  const onFileChange = e => {
    // обработчик события (извлекаем выбранный userom файл)
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // функция расчёта нормы воды
  const calculate = () => {
    const weight = parseFloat(watch('weight')) || 0;
    const activeTimeSport = parseFloat(watch('activeTimeSport')) || 0;
    if (watch('gender') === 'woman') {
      return (weight * 0.03 + activeTimeSport * 0.4).toFixed(1);
    } else if (watch('gender') === 'man') {
      return (weight * 0.04 + activeTimeSport * 0.6).toFixed(1);
    }
    return 0;
  };

  // обработка отправки формы
  const submit = async userData => {
    setIsLoading(true);
    const formData = new FormData(); // создаём объект formData
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });
    if (file) {
      formData.append('avatarURL', file);
    }
    try {
      await dispatch(updateUserInfo(formData)); // отправка данных(formData) на бек
      successToast('User updated successfuly');
      dispatch(closeModal());
    } catch (error) {
      errorToast('Error: Unsuccessful update of user information', error);
    } finally {
      setIsLoading(false); // Устанавливаем isLoading в false после получения ответа
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <form
        className={css.form}
        onSubmit={handleSubmit(submit)}
        encType="multipart/form-data"
      >
        <div className={css.imageWrap}>
          {/* <img
            src={file ? URL.createObjectURL(file) : avatarURL}
            // динамически отображаем выбранное пользователем изображение
            // (если оно выбрано) или аватар пользователя(переменная avatarURL) (если изображение не выбрано или не загружено).
            alt="user avatar"
            className={css.avatarImg}
          /> */}
          <div>
            <img
              className={css.avatarImg}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>

          <label className={css.buttonUpload}>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className={css.imgInput}
              ref={fileInputRef}
            />
            {/* <svg className={css.iconUpload} width="18" height="18">
              <use xlinkHref={`${modalIcons}#icon-upload`}></use>
            </svg> */}
            <Icon
              className={css.iconUpload}
              width="18"
              height="18"
              id="icon-upload"
            />
            <p>Upload a photo</p>
          </label>
        </div>

        <div className={css.partWrap}>
          <div
            className={`${css.inputContainerGender} ${
              errors.gender ? css.hasError : ''
            }`}
          >
            <h2 className={css.inputTitleBold}>Your gender identity</h2>
            <div className={css.genderInputWrap}>
              <label className={css.radio}>
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  className={css.genderInput}
                  {...register('gender')}
                />
                <span className={css.iconWrap}>
                  <Icon
                    className={css.iconRadio}
                    width={20}
                    height={20}
                    id={
                      watch('gender') === 'woman'
                        ? 'icon-radio-active'
                        : 'icon-radio'
                    }
                  />
                </span>
                woman
              </label>
              <label className={css.radio}>
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  className={css.genderInput}
                  {...register('gender')}
                />
                <span className={css.iconWrap}>
                  <Icon
                    className={css.iconRadio}
                    width={20}
                    height={20}
                    id={
                      watch('gender') === 'man'
                        ? 'icon-radio-active'
                        : 'icon-radio'
                    }
                  />
                </span>
                man
              </label>
            </div>
            {errors.gender && (
              <p className={css.error}>{errors.gender.message}</p>
            )}
          </div>
        </div>

        <div className={css.block}>
          <div className={css.blockWrap}>
            <div className={css.partWrap}>
              <div
                className={`${css.inputContainer} ${
                  errors.name ? css.hasError : ''
                }`}
              >
                <label htmlFor={nameId} className={css.inputTitleBold}>
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id={nameId}
                  className={`${css.inputField} ${
                    errors.name && css.inputError
                  }`}
                  {...register('name')}
                />
                {errors.name && (
                  <p className={css.error}>{errors.name.message}</p>
                )}
              </div>
              <div
                className={`${css.inputContainer} ${
                  errors.email ? css.hasError : ''
                }`}
              >
                <label htmlFor={emailId} className={css.inputTitleBold}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id={emailId}
                  className={`${css.inputField}
                  ${css.inputField} ${errors.email && css.inputError}`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className={css.error}>{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className={css.partWrap}>
              <h2 className={`${css.inputTitleBold} ${css.dailyTitle}`}>
                My daily norma
              </h2>
              <div className={css.normaForm}>
                <div className={css.normaFormWoman}>
                  <h3 className={css.inputTitle}>For woman:</h3>
                  <p className={css.accentText}>V=(M*0,03) + (T*0,4)</p>
                </div>
                <div className={css.normaFormMan}>
                  <h3 className={css.inputTitle}>For man:</h3>
                  <p className={css.accentText}>V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
              <div className={css.border}>
                <p className={css.borderText}>
                  <span className={css.accentText}>*</span> V is the volume of
                  the water norm in liters per day, M is your body weight, T is
                  the time of active sports, or another type of activity
                  commensurate in terms of loads (in the absence of these, you
                  must set 0)
                </p>
              </div>
              <div className={css.activeTime}>
                {/* <svg className={css.iconExclamation} width="18" height="18">
                  <use xlinkHref={`${modalIcons}#icon-exclamation-mark`}></use>
                </svg> */}
                <Icon
                  className={css.iconExclamation}
                  width={18}
                  height={18}
                  id="icon-clamation"
                />
                <p>Active time in hours</p>
              </div>
            </div>
          </div>
          <div className={css.blockWrap}>
            <div className={css.partWrap}>
              <div
                className={`${css.inputContainer} ${
                  errors.weight ? css.hasError : ''
                }`}
              >
                <label className={css.inputTitle}>
                  Your weight in kilograms:
                </label>
                <input
                  type="number"
                  name="weight"
                  className={css.inputField}
                  {...register('weight')}
                />
                {errors.weight && (
                  <p className={css.error}>{errors.weight.message}</p>
                )}
              </div>
              <div
                className={`${css.inputContainer} ${
                  errors.activeTimeSport ? css.hasError : ''
                }`}
              >
                <label className={css.inputTitle}>
                  The time of active participation in sports:
                </label>
                <input
                  type="number"
                  name="activeTimeSport"
                  className={css.inputField}
                  {...register('activeTimeSport')}
                />
                {errors.activeTimeSport && (
                  <p className={css.error}>{errors.activeTimeSport.message}</p>
                )}
              </div>
            </div>
            <div className={`${css.partWrap} ${css.requiredAmountWrap}`}>
              <div className={css.requiredAmount}>
                <h3 className={css.inputTitle}>
                  The required amount of water in liters per day:
                </h3>
                <p className={`${css.accentText} ${css.accentLiter}`}>
                  {calculate()} L
                </p>
              </div>
              <div
                className={`${css.inputContainer} ${
                  errors.dailyWaterRate ? css.hasError : ''
                }`}
              >
                <label className={css.inputTitleBold}>
                  Write down how much water you will drink:
                </label>
                <input
                  type="number"
                  name="dailyWaterRate"
                  className={css.inputField}
                  step={0.1}
                  {...register('dailyWaterRate')}
                />
                {errors.dailyWaterRate && (
                  <p className={css.error}>{errors.dailyWaterRate.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className={css.submitBtn}>
          Save
        </button>
      </form>
      {/* <Toaster /> */}
    </>
  );
}
