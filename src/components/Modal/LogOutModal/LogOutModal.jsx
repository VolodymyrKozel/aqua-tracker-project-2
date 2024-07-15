import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';
import { useTranslation } from 'react-i18next';

const LogOutModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  // const navigate = useNavigate();
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

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.logoutModal}>
        <Icon
          className={css.closeIcon}
          width="28"
          height="28"
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalLogoutTitle}>{t('modals.logout')}</h3>
        <p className={css.modalLogoutText}>{t('modals.leave')}</p>
        <div className={css.modalButtonContainer}>
          <Button variant="primary">{t('modals.logout')}</Button>
          <Button variant="default" onClick={handleClose}>
          {t('modals.cancel')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
