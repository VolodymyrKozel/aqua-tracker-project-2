import Modal from 'react-modal';
import clsx from 'clsx';
import css from '../Modal/Modal.module.css';
import Icon from '../shared/Icon/Icon';

Modal.setAppElement('#root');

export default function ModalWrap({
  children,
  isOpen,
  handleClose,
  modalType = '',
}) {
  function closeModal() {
    handleClose(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.overlay}
      className={clsx(
        css.modal,
        modalType === 'UserSettingsModal' ? css['settings'] : ''
      )}
    >
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={handleClose}
      >
        <Icon className={css.icon} width={24} height={24} id={'icon-cross'} />
      </button>

      {children}
    </Modal>
  );
}
