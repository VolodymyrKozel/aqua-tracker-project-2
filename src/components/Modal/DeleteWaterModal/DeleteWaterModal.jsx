import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './DeleteWaterModal.module.css';
import { useTranslation } from 'react-i18next';

const DeleteWaterModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.deleteModal}>
        <Icon
          className={css.closeIcon}
          width="28"
          height="28"
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalDeleteTitle}>{t('modals.deleteEntry')}</h3>
        <p className={css.modalDeleteText}>
        {t('modals.sureDelete')}
        </p>
        <div className={css.modalButtonContainer}>
          <Button variant="primary">{t('modals.delete')}</Button>
          <Button variant="default" onClick={handleClose}>
          {t('modals.cancel')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
