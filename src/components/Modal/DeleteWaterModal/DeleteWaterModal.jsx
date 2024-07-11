import { useState } from 'react';
// import { useNavigate } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.deleteModal}>
        <Icon
          className={css.closeIcon}
          width="28"
          height="28"
          id="icon-cross"
          onClick={handleClose}
        />
        <h3 className={css.modalDeleteTitle}>Delete entry</h3>
        <p className={css.modalDeleteText}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.modalButtonContainer}>
          <Button variant="primary">Delete</Button>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
