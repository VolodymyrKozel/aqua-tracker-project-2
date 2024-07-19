import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={css.generalSignUpInfo}>
      <SignUpForm />
      {/* <div className={css.advantagesSection}>
      <AdvantagesSection  />
      </div> */}
    </div>
  );
};

export default SignUpPage;
