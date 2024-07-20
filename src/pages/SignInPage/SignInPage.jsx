import SignInForm from '../../components/SignInForm/SignInForm';
import css from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <div className={css.generalSignInInfo}>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
