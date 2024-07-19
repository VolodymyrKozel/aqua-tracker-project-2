import SignInForm from '../../components/SignInForm/SignInForm';
import css from './SignInPage.module.css';
// import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignInPage = () => {
  return (
    <div className={css.generalSignInInfo}>
      <SignInForm />
      {/* <div className={css.advantagesSection}>
        <AdvantagesSection />
      </div> */}
    </div>
  );
};

export default SignInPage;
