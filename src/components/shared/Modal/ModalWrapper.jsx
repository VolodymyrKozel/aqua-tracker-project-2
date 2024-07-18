import { forwardRef } from 'react';
import css from './ModalWrapper.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalWrapper = forwardRef(
  ({ children, modalIsOpen, closeModal, ...props }, ref) => {
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
        ref={ref}
      >
        {children}
      </Modal>
    );
  }
);

ModalWrapper.displayName = 'ModalWrapper';

export default ModalWrapper;
