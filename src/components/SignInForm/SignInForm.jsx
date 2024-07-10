import css from './SignInForm.module.css';
import Logo from '../Logo/Logo';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div className={css.mainLoginContainer}>
      <Logo />
      <div className={css.loginFormContainer}>
        <h1 className={css.title}>Sign in</h1>
        <form className={css.loginForm}>
            <label className={css.fieldLabel}>Email</label>
            <div className={css.inputField}>
                <input className={css.input} type="email" placeholder='Enter your email' autoComplete='on' />
            </div>
            <label className={css.fieldLabel}>Password</label>
            <div className={css.inputField}>
               <input className={css.input} type="password" placeholder='Enter your password' />
            </div>
            <button className={css.button} type="submit">
            Sign In
          </button>
        </form>
        <p className={css.afterDescription}>Don’t have an account?<NavLink className={css.link} to={'/signup'}> Sign Up</NavLink></p>
      </div>
    </div>
  )
}

export default SignInForm