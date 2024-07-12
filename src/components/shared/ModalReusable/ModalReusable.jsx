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
      <div className={css.content}>{children}</div>
    </Modal>
  );
}
