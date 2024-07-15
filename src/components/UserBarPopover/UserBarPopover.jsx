import css from './UserBarPopover.module.css';

import { useRef, useEffect } from 'react';
import clsx from 'clsx';

import Icon from '../shared/Icon/Icon.jsx';

export default function UserBarPopover({ onClose }) {
  const popoverRef = useRef();

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

  const showModal = modalType => {
    console.log(`Opening modal: ${modalType}`);
    onClose();
  };

  return (
    <div ref={popoverRef} className={css.userBarPopoverContainer}>
      <button
        type="button"
        className={css.popoverBtn}
        onClick={() => showModal('UserSettingsModal')}
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
        onClick={() => showModal('LogOutModal')}
      >
        <Icon
          className={css.popoverIcon}
          width="16"
          height="16"
          id={'icon-log-out'}
        />
        <p className={css.popoverText}>Log out</p>
      </button>
    </div>
  );
}
