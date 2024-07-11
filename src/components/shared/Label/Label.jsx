import css from './Label.module.css';

const Label = ({ children, ...props }) => {
  return (
    <label className={css.label} {...props}>
      {children}
    </label>
  );
};

export default Label;
