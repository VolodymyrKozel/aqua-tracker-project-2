import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './DeleteWaterModal.module.css';
import { useTranslation } from 'react-i18next';

const DeleteWaterModal = ({ onClose, handleDelete }) => {
  const { t } = useTranslation();

  return (
    <div className={css.deleteModal}>
      <Icon
        className={css.closeIcon}
        width={28}
        height={28}
        id="icon-cross"
        onClick={onClose}
      />
      <h3 className={css.modalDeleteTitle}>{t('modals.deleteEntry')}</h3>
      <p className={css.modalDeleteText}>{t('modals.sureDelete')}</p>
      <div className={css.modalButtonContainer}>
        <Button
          className={css.modalButon}
          variant="primary"
          onClick={handleDelete}
        >
          {t('modals.delete')}
        </Button>
        <Button className={css.modalButon} variant="default" onClick={onClose}>
          {t('modals.cancel')}
        </Button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
