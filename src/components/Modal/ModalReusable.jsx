import css from './ModalReusable.module.css';
import Modal from 'react-modal';

function ModalReusable({ children, ...props }) {
  //можна передати пропси за допомогою деструктуризації
  console.log(props);

  Modal.setAppElement('#root');
  return (
    <>
      <Modal
        closeTimeoutMS={400}
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        className={{
          base: css['modal'],
          afterOpen: css['afterOpen'],
          beforeClose: css['beforeClose'],
        }}
        overlayClassName={css['overlay']}
        contentLabel="delete contact"
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalReusable;
