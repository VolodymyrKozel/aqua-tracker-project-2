import css from './ErrorMessage.module.css';
function ErrorMessage({ children }) {
  return <p className={css.errors}>{children}</p>;
}

export default ErrorMessage;
