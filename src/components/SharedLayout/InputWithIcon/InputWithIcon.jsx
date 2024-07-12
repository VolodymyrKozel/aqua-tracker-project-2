import css from './InputWithIcon.module.css';

const InputWithIcon = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default InputWithIcon;
