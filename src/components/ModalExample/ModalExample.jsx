import { useState } from 'react';
import ModalWrapper from '../shared/Modal/ModalWrapper';
import LogOutModal from '../Modal/LogOutModal/LogOutModal';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Log Out Modal</button>
      <button onClick={() => setShowModal2(true)}>Open Settings Modal</button>

      <ModalWrapper
        modalIsOpen={showModal}
        closeModal={() => setShowModal(false)}
      >
        <LogOutModal closeModal={() => setShowModal(false)} />
      </ModalWrapper>
      <ModalWrapper
        modalIsOpen={showModal2}
        closeModal={() => setShowModal(false)}
      >
        <UserSettingsModal closeModal={handleCloseModal2} />
      </ModalWrapper>
    </>
  );
};

export default ModalExample;
