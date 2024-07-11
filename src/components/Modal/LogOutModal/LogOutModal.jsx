import { useState } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';

const LogOutModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.logoutModal}>
        <Icon
          className={css.closeIcon}
          width="28"
          height="28"
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalLogoutTitle}>Log out</h3>
        <p className={css.modalLogoutText}>Do you really want to leave?</p>
        <div className={css.modalButtonContainer}>
          <Button variant="primary">Log out</Button>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
