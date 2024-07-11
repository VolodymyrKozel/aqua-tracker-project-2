import { useState } from 'react';
import ModalReusable from '../Modal/ModalReusable';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import ErrorMessage from '../shared/errorMessage/ErrorMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginUserSchema } from '../../validation/auth';
import Label from '../shared/Label/Label';

const ModalExample = () => {
  /* modal */
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
    clearErrors,
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

  const handFocus = fieldName => {
    clearErrors(fieldName);
  };
  /* form */
  return (
    <>
      {/* кнопка для відкриття модалки */}
      <button onClick={openModal}>open modal</button>
      <ModalReusable modalIsOpen={modalIsOpen} openModal={openModal}>
        <h1>Title</h1>
        <Label htmlFor="modal">Modal input</Label>
        <Input type="text" name="modal" placeholder="Enter your name" />
        {/* Тут має бути ваш компонент */}
        <p>some content</p>
        {/* Кнопка для закриття модалки */}
        <Button variant="primary" onClick={closeModal}>
          close
        </Button>
      </ModalReusable>
      <div>
        <h2> Компонент ModalReusable</h2>
        <p>
          ModalReusable - це компонент модального вікна, створений за допомогою
          бібліотеки react-modal з можливістю застосування власних стилів через
          CSS модулі.
        </p>
        <Input className="input" type="text" placeholder="Enter your name" />
        <ErrorMessage>{'some error'}</ErrorMessage>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email</Label>
          <Input
            className={errors.email && 'error'}
            type="email"
            id="email"
            {...register('email')}
            placeholder="Enter your email"
            autoComplete="on"
            onFocus={() => handFocus('email')}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Label htmlFor="password">Password</Label>
          <div>
            <Input
              className={errors.password && 'error'}
              type="password"
              id="password"
              {...register('password')}
              placeholder="Enter your password"
              onFocus={() => handFocus('password')}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
};

export default ModalExample;
