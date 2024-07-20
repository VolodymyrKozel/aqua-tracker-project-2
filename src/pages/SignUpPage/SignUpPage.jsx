import SignUpForm from '../../components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignUpPage = () => {
  return (
    <div className={css.generalSignUpInfo}>
      <SignUpForm />
      <div className={css.advantagesSection}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
