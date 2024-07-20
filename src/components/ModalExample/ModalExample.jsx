import { useState } from 'react';
import ModalWrapper from '../shared/Modal/ModalWrapper';
import LogOutModal from '../Modal/LogOutModal/LogOutModal';
import Popover from '../test/popover/popover';
import ModalReusable from '../shared/ModalReusable/ModalReusable';
import css from './ModalExample.module.css';
import Icon from '../shared/Icon/Icon';
import clsx from 'clsx';
import PopoverModal from '../shared/PopoverModal/PopoverModal';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };
  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
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
        containerClassName={css.modal}
        modalIsOpen={showModal2}
        closeModal={() => setShowModal(false)}
      >
        <UserSettingsModal closeModal={handleCloseModal2} />
      </ModalWrapper>
      <h1>React Popover Example</h1>
      <Popover
        content={
          <div>
            <button
              type="button"
              className={css.popoverBtn}
              onClick={openModal}
            >
              <Icon
                className={css.popoverIcon}
                title="settings"
                width="16"
                height="16"
                id={'icon-settings'}
              />
              <p className={css.popoverText}>Setting</p>
            </button>
            <button
              type="button"
              className={clsx(css.popoverBtn, css.popoverBtnGray)}
              onClick={openLogOutModal}
            >
              <Icon
                className={css.popoverIcon}
                width="16"
                height="16"
                id={'icon-log-out'}
              />
              <p className={css.popoverText}>Log out</p>
            </button>
            <ModalWrapper modalIsOpen={isModalOpen} closeModal={closeModal}>
              <UserSettingsModal closeModal={closeModal} />
            </ModalWrapper>
            <ModalWrapper
              modalIsOpen={isLogOutModalOpen}
              closeModal={closeLogOutModal}
            >
              <LogOutModal closeModal={closeLogOutModal} />
            </ModalWrapper>
          </div>
        }
      >
        Click me!
      </Popover>
      <PopoverModal />
    </>
  );
};

export default ModalExample;
