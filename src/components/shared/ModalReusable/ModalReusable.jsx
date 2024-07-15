import Modal from 'react-modal';
import css from './ModalReusable.module.css';

Modal.setAppElement('#root');

const ModalReusable = ({ children, modalIsOpen, closeModal }) => {
  const handleClickInsideModal = event => {
    event.stopPropagation();
  };

  const handleClickOutside = event => {
    event.stopPropagation();
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      closeTimeoutMS={400}
      onRequestClose={closeModal}
      className={{
        base: css.modal,
        afterOpen: css.afterOpen,
        beforeClose: css.beforeClose,
      }}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.content} onClick={handleClickOutside}>
        <div onClick={handleClickInsideModal}>{children}</div>
      </div>
    </Modal>
  );
};

export default ModalReusable;
