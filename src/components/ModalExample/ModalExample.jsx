import { useState } from 'react';
import ModalReusable from '../shared/ModalReusable/ModalReusable';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import ErrorMessage from '../shared/errorMessage/ErrorMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginUserSchema } from '../../validation/auth';
import Label from '../shared/Label/Label';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
/* import UserSettingsForm from '../UserSettingsForm/UserSettingsForm'; */
import ModalWrap from '../Modal/Modal';
import useModal from '../../hooks/useOpenClose';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import { useTranslation } from 'react-i18next';

const ModalExample = () => {
  const { isOpen, openModal: open, closeModal: close } = useModal();
  /* modal */
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  /* modal */

  /* form */
  const schema = LoginUserSchema;
  /*   const dispatch = useDispatch(); */

  /* const [showPassword, setShowPassword] = useState(false); */

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    /*  dispatch(login(data)); */
    reset();
  };
  /* form */
  return (
    <>
      {/* кнопка для відкриття модалки */}
      <button onClick={openModal}>{t('openModalButton')}</button>
      <Button variant="primary" onClick={() => setShowModal(!showModal)}>
      {t('openModalButton')}
      </Button>
      <Button variant="primary" onClick={open}>
      {t('openModal')}
      </Button>
      <ModalWrap isOpen={showModal} handleClose={setShowModal}>
        {/* Тут має бути ваш компонент */}
      </ModalWrap>
      <ModalReusable modalIsOpen={isOpen} openModal={open} closeModal={close}>
        <UserSettingsModal closeModal={close} />
      </ModalReusable>
      <ModalReusable
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        {/* Тут має бути ваш компонент */}
        {/* Кнопка для закриття модалки */}
        <Button variant="primary" onClick={closeModal}>
        {t('close')}
        </Button>{' '}
      </ModalReusable>
      <div>
        <Input className="input" type="text" placeholder="Enter your name" />
        <ErrorMessage>{'some error'}</ErrorMessage>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">{t('signupForm.email')}</Label>
          <Input
            className={errors.email && 'error'}
            type="email"
            id="email"
            {...register('email')}
            placeholder={t('signupForm.placeholderEmail')}
            autoComplete="on"
            onFocus={() => handFocus('email')}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Label htmlFor="password">{t('signupForm.password')}</Label>
          <div>
            <Input
              className={errors.password && 'error'}
              type="password"
              id="password"
              {...register('password')}
              placeholder={t('signupForm.placeholderPassword')}
              onFocus={() => handFocus('password')}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          {t('signinForm.signin')}
          </Button>
        </form>
        <CalendarPagination />
      </div>
    </>
  );
};

export default ModalExample;
