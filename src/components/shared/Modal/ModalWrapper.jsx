import css from './ModalWrapper.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalWrapper({
  children,
  modalIsOpen,
  closeModal,
  ...props
}) {
  //можна передати пропси за допомогою деструктуризації

  return (
    <Modal
      isOpen={modalIsOpen}
      closeTimeoutMS={400}
      onRequestClose={closeModal}
      className={{
        base: css['modal'] + ' ' + props.className,
        afterOpen: css['afterOpen'],
        beforeClose: css['beforeClose'],
      }}
      overlayClassName={css['overlay']}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <>{children}</>
    </Modal>
  );
}
