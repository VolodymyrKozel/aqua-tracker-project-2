// import React, { useEffect } from 'react';
import Modal from 'react-modal';
import WaterForm from '../WaterForm/WaterForm.jsx';
import css from './WaterModal.module.css';
import Icon from '../../shared/Icon/Icon.jsx';
const WaterModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  operationType,
  defaultValues,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={operationType === 'add' ? 'Add Water' : 'Edit Water'}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <Icon
        className={css.closeIcon}
        width="28"
        height="28"
        id="icon-cross"
        onClick={onRequestClose}
      />
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
      <WaterForm
        onSubmit={onSubmit}
        onRequestClose={onRequestClose}
        defaultValues={defaultValues}
        closeModal={onRequestClose}
      />
    </Modal>
  );
};
export default WaterModal;
