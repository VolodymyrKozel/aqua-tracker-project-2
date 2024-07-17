import { useState } from 'react';
import ModalWrapper from '../shared/Modal/ModalWrapper';
import LogOutModal from '../Modal/LogOutModal/LogOutModal';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import Popover from '../test/popover/popover';
import ModalReusable from '../shared/ModalReusable/ModalReusable';
import css from './ModalExample.module.css';
import Icon from '../shared/Icon/Icon';
import clsx from 'clsx';

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
        modalIsOpen={showModal2}
        closeModal={() => setShowModal(false)}
      >
        <UserSettingsModal closeModal={handleCloseModal2} />
      </ModalWrapper>
      <h1>React Popover Example</h1>
      <Popover
        content={
          <div>
            {' '}
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
            <ModalReusable modalIsOpen={isModalOpen} closeModal={closeModal}>
              <UserSettingsModal closeModal={closeModal} />
            </ModalReusable>
            <ModalReusable
              modalIsOpen={isLogOutModalOpen}
              closeModal={closeLogOutModal}
            >
              <LogOutModal closeModal={closeLogOutModal} />
            </ModalReusable>
          </div>
        }
      >
        Click me!
      </Popover>
    </>
  );
};

export default ModalExample;
