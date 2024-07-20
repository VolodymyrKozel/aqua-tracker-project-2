import SignUpForm from '../../components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={css.generalSignUpInfo}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
