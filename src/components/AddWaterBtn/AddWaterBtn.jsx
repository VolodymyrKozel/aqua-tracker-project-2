import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  return (
    <div>
      <button type="button" className={css.btn}>
        <svg className={css.icon} width={12} height={12}>
          <use href="/src/assets/images/icons.svg#icon-glass-fill"></use>
        </svg>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
