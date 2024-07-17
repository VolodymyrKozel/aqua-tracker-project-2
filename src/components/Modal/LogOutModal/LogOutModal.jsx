import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';

const LogOutModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [iconSize, setIconSize] = useState({ width: 28, height: 28 });
  const navigate = useNavigate();
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

    const updateIconSize = () => {
      if (window.innerWidth < 375) {
        setIconSize({ width: 24, height: 24 });
      } else {
        setIconSize({ width: 28, height: 28 });
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', updateIconSize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.logoutModal}>
        <Icon
          className={css.closeIcon}
          width={iconSize.width}
          height={iconSize.height}
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalLogoutTitle}>Log out</h3>
        <p className={css.modalLogoutText}>Do you really want to leave?</p>
        <div className={css.modalButtonContainer}>
          <Button
            variant="primary"
            className={css.modalButon}
            onClick={() => navigate('/')}
          >
            Log out
          </Button>
          <Button
            variant="default"
            className={css.modalButon}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
