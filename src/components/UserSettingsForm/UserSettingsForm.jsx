import { useEffect, useId, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectUser } from '../../redux/users/selectors';
import { updateAvatar, updateUser } from '../../redux/users/operations';
import Icon from '../shared/Icon/Icon';
import { userSettingsSchema } from '../../validation/form';

import Loader from '../shared/Loader/Loader';
import { selectIsLoading } from '../../redux/users/selectors';
import { avatar_photo_default } from './images';
import css from '../UserSettingsForm/UserSettingsForm.module.css';
import { useTranslation } from 'react-i18next';

export default function UserSettingsForm({ closeModal }) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(selectUser);
  const userId = user.id;
  const avatarURL = user.avatarURL;
  const [preview, setPreview] = useState(avatarURL || avatar_photo_default);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(userSettingsSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      gender: user?.gender || '',
      weight: user?.weight || 0,
      activeTimeSports: user?.activeTimeSports || 0,
      waterDrink: user?.waterDrink || 0,
    },
  });
  useEffect(() => {
    if (user) {
      setValue('name', user.name || '');
      setValue('email', user.email || '');
      setValue('weight', user.weight || 0);
      setValue('activeTimeSports', user.activeTimeSports || 0);
      setValue('waterDrink', user.waterDrink || 0);
      setValue('gender', user.gender || '');
    }
  }, [user, setValue]);

  const nameId = useId();
  const emailId = useId();
  const fileInputRef = useRef(null); // объект ссылки для получения доступа к инпуту файла

  const onFileChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      dispatch(updateAvatar({ file: selectedFile, userId }))
        .unwrap()
        .then(res => {
          setPreview(res.avatarURL);
        });
    }
  };

  // функция расчёта нормы воды
  const calculate = () => {
    const weight = parseFloat(watch('weight')) || 0;
    const activeTimeSports = parseFloat(watch('activeTimeSports')) || 0;
    if (watch('gender') === 'woman') {
      return (weight * 0.03 + activeTimeSports * 0.4).toFixed(1);
    } else if (watch('gender') === 'man') {
      return (weight * 0.04 + activeTimeSports * 0.6).toFixed(1);
    }
    return 0;
  };

  // обработка отправки формы
  const submit = async userData => {
    dispatch(updateUser(userData));
    closeModal();
  };

  return (
    <>
      {isLoading && <Loader />}
      <form className={css.form} onSubmit={handleSubmit(submit)}>
        <div className={css.imageWrap}>
          <img
            src={preview}
            // динамически отображаем выбранное пользователем изображение
            // (если оно выбрано) или аватар пользователя(переменная avatarURL) (если изображение не выбрано или не загружено).
            alt="user avatar"
            className={css.avatarImg}
          />

          <label className={css.buttonUpload}>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className={css.imgInput}
              ref={fileInputRef}
            />
            <Icon
              className={css.iconUpload}
              width="18"
              height="18"
              id="icon-upload"
            />
            <p>{t('modals.uploadPhoto')}</p>
          </label>
        </div>

        <div className={css.partWrap}>
          <div
            className={`${css.inputContainerGender} ${
              errors.gender ? css.hasError : ''
            }`}
          >
            <h2 className={css.inputTitleBold}>{t('modals.gender')}</h2>
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
                {t('modals.woman')}
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
                {t('modals.man')}
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
                  {t('modals.name')}
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
                  {t('modals.email')}
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
                {t('modals.myDailyNorma')}
              </h2>
              <div className={css.normaForm}>
                <div className={css.normaFormWoman}>
                  <h3 className={css.inputTitle}>{t('modals.forWoman')}:</h3>
                  <p className={css.accentText}>V=(M*0,03) + (T*0,4)</p>
                </div>
                <div className={css.normaFormMan}>
                  <h3 className={css.inputTitle}>{t('modals.forMan')}:</h3>
                  <p className={css.accentText}>V=(M*0,04) + (T*0,6)</p>
                </div>
              </div>
              <div className={css.border}>
                <p className={css.borderText}>
                  <span className={css.accentText}>*</span>{' '}
                  {t('modals.countVolume')}
                </p>
              </div>
              <div className={css.activeTime}>
                <Icon
                  className={css.iconExclamation}
                  width={18}
                  height={18}
                  id="icon-clamation"
                />
                <p>{t('modals.activeTime')}</p>
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
                  {t('modals.yourWeight')}:
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
                  errors.activeTimeSports ? css.hasError : ''
                }`}
              >
                <label className={css.inputTitle}>
                  {t('modals.yourActivities')}:
                </label>
                <input
                  type="number"
                  name="activeTimeSports"
                  className={css.inputField}
                  {...register('activeTimeSports')}
                />
                {errors.activeTimeSports && (
                  <p className={css.error}>{errors.activeTimeSports.message}</p>
                )}
              </div>
            </div>
            <div className={`${css.partWrap} ${css.requiredAmountWrap}`}>
              <div className={css.requiredAmount}>
                <h3 className={css.inputTitle}>{t('modals.require')}:</h3>
                <p className={`${css.accentText} ${css.accentLiter}`}>
                  {calculate()} L
                </p>
              </div>
              <div
                className={`${css.inputContainer} ${
                  errors.waterDrink ? css.hasError : ''
                }`}
              >
                <label className={css.inputTitleBold}>
                  {t('modals.writeDown')}:
                </label>
                <input
                  type="number"
                  name="waterDrink"
                  className={css.inputField}
                  step={0.1}
                  {...register('waterDrink')}
                />
                {errors.waterDrink && (
                  <p className={css.error}>{errors.waterDrink.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className={css.submitBtn}>
          {t('modals.save')}
        </button>
      </form>
    </>
  );
}
