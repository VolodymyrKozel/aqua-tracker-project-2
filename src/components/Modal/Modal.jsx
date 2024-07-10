import { useState } from 'react';
import css from './Modal.module.css';
import Modal from 'react-modal';

function ModalReusable() {
  // use state for modal open or close
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // close modal seting state to false
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // open modal setting state to true
  const openModal = () => {
    setModalIsOpen(true);
  };

  // custom function for delete or edit or add
  const handleYes = () => {
    //make a delete request
  };

  return (
    <>
      {/*   trigger button for modal to open  */}
      <button className="btn" onClick={openModal}>
        Delete
      </button>
      <Modal
        closeTimeoutMS={400}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={{
          base: css['modal'],
          afterOpen: css['afterOpen'],
          beforeClose: css['beforeClose'],
        }}
        overlayClassName={css['overlay']}
        contentLabel="delete contact"
      >
        <div>here content</div>
      </Modal>
    </>
  );
}

export default ModalReusable;
