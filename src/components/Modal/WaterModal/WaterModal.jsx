import WaterForm from '../WaterForm/WaterForm.jsx';
import css from './WaterModal.module.css';
import Icon from '../../shared/Icon/Icon.jsx';
import { useTranslation } from 'react-i18next';

const WaterModal = ({ onClose, onSubmit, operationType, defaultValues }) => {
  const { t } = useTranslation();
  return (
    <div className={css.waterModal}>
      <button className={css.btn} onClick={onClose}>
        <Icon
          className={css.closeIcon}
          width="28"
          height="28"
          id="icon-cross"
        />
      </button>
      <h2 className={css.waterModalTitle}>
        {operationType === 'add'
          ? 'Add Water'
          : 'Edit the entered amount of water'}
      </h2>
      {operationType === 'add' ? (
        <p className={css.text}>{t('modals.addText')}</p>
      ) : (
        <p className={css.text}>{t('modals.editText')}</p>
      )}
      <WaterForm onSubmit={onSubmit} defaultValues={defaultValues} />
    </div>
  );
};
export default WaterModal;
