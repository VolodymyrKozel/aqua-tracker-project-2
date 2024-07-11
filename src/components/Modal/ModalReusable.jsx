import css from './ModalReusable.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ModalReusable({
  children,
  modalIsOpen,
  closeModal,
  ...props
}) {
  //можна передати пропси за допомогою деструктуризації
  console.log(props);

  return (
    <Modal
      isOpen={modalIsOpen}
      closeTimeoutMS={400}
      onRequestClose={closeModal}
      className={{
        base: css['modal'],
        afterOpen: css['afterOpen'],
        beforeClose: css['beforeClose'],
      }}
      /* overlayClassName={css['overlay']} */
      contentLabel="delete contact"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {children}
    </Modal>
  );
}
