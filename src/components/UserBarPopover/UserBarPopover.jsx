
import { useRef, useEffect } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import Icon from '../shared/Icon/Icon.jsx';
import ModalReusable from '../shared/ModalReusable/ModalReusable.jsx';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal.jsx';
import LogOutModal from '../Modal/LogOutModal/LogOutModal.jsx';

import css from './UserBarPopover.module.css';

export default function UserBarPopover({ onClose }) {
  const popoverRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
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
    <div ref={popoverRef} className={css.userBarPopoverContainer}>
      <button type="button" className={css.popoverBtn} onClick={openModal}>
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
        <div onClick={e => e.stopPropagation()}>
          <UserSettingsModal closeModal={closeModal} />
        </div>
      </ModalReusable>

      <ModalReusable
        modalIsOpen={isLogOutModalOpen}
        closeModal={closeLogOutModal}
      >
        <div onClick={e => e.stopPropagation()}>
          <LogOutModal closeModal={closeLogOutModal} />
        </div>
      </ModalReusable>
    </div>
  );
}