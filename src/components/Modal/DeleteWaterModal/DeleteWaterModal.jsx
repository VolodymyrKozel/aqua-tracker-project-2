import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = ({ onClose, handleDelete }) => {
  return (
    <div className={css.deleteModal}>
      <Icon
        className={css.closeIcon}
        width={28}
        height={28}
        id="icon-cross"
        onClick={onClose}
      />
      <h3 className={css.modalDeleteTitle}>Delete entry</h3>
      <p className={css.modalDeleteText}>
        Are you sure you want to delete the entry?
      </p>
      <div className={css.modalButtonContainer}>
        <Button
          className={css.modalButon}
          variant="primary"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button className={css.modalButon} variant="default" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
