import SignInForm from "../../components/SignInForm/SignInForm";
import css from "./SignInPage.module.css";

const SignInPage = () => {
  return <div>
    <div className={css.generalSignInInfo}>
    <SignInForm />
    </div>
   
  </div>;
};

export default SignInPage;
