import { forwardRef } from 'react';
import WaterForm from '../WaterForm/WaterForm.jsx';
import css from './WaterModal.module.css';
import Icon from '../../shared/Icon/Icon.jsx';
import ModalWrapper from '../../shared/Modal/ModalWrapper.jsx';

const WaterModal = forwardRef(
  ({ modalIsOpen, onClose, onSubmit, operationType, defaultValues }, ref) => {
    return (
      <ModalWrapper
        ref={ref}
        modalIsOpen={modalIsOpen}
        containerClassName={css.waterModal}
      >
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
          <p className={css.text}>Choose a value:</p>
        ) : (
          <p className={css.text}>Correct entered data:</p>
        )}
        <WaterForm onSubmit={onSubmit} defaultValues={defaultValues} />
      </ModalWrapper>
    );
  }
);

WaterModal.displayName = 'WaterModal';
export default WaterModal;
