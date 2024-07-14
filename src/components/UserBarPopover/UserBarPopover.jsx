import css from './UserBarPopover.module.css';

import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { hidePopover } from '../../redux/popover/slice.js';
import { openModal } from '../../redux/modal/slice.js';
<<<<<<< Updated upstream
import { selectIsVisible } from '../../redux/popover/selector.js';

// import UserSettingsModal from '../UserSettingsModal/UserSettingsModal.jsx';
// import LogOutModal from '../Modal/LogOutModal/LogOutModal.jsx';

import Icon from '../shared/Icon/Icon.jsx';

export default function UserBarPopover({ onClose }) {
  const isVisible = useSelector(selectIsVisible);
=======

import UserSettingsModal from '../UserSettingsModal/UserSettingsModal.jsx';
import LogOutModal from '../Modal/LogOutModal/LogOutModal.jsx';

import Icon from '../shared/Icon/Icon.jsx';

export default function UserBarPopover() {
  const { isVisible } = useSelector(() => true);
>>>>>>> Stashed changes
  const dispatch = useDispatch();
  const popoverRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
<<<<<<< Updated upstream
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        console.log('Clicked outside popover');
        dispatch(hidePopover());
        onClose();
=======
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        dispatch(hidePopover());
>>>>>>> Stashed changes
      }
    };

    if (isVisible) {
      console.log('Popover is visible, adding event listener');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      console.log('Popover is not visible, removing event listener');
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      console.log('Cleaning up event listener');
      document.removeEventListener('mousedown', handleClickOutside);
    };
<<<<<<< Updated upstream
  }, [isVisible, dispatch, onClose]);
=======
  }, [isVisible, dispatch]);
>>>>>>> Stashed changes

  const showModal = modalType => {
    dispatch(openModal({ modalType }));
    dispatch(hidePopover());
    onClose();
  };

  if (!isVisible) {
    return null;
  }

<<<<<<< Updated upstream
  console.log('Rendering UserBarPopover, isVisible:', isVisible);

=======
>>>>>>> Stashed changes
  return (
    <div ref={popoverRef} className={css.userBarPopoverContainer}>
      <button
        type="button"
        className={css.popoverBtn}
        onClick={() => showModal(<UserSettingsModal />)}
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
        onClick={() => showModal(<LogOutModal />)}
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
