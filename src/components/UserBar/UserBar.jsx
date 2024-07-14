import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import { IconChevronDown } from './IconChevronDown.jsx';
import css from './UserBar.module.css';
import { IconChevronUp } from './IconChevronUp.jsx';
import { useEffect, useRef, useState } from 'react';

const UserBar = () => {
  const [togglePopover, setTogglePopover] = useState(false);
  const popoverRef = useRef(null);

  const handleOutsideClick = e => {
    if (popoverRef.current && !popoverRef.current.contains(e.target)) {
      setTogglePopover(false);
    }
  };

  const handleButtonClick = () => {
    setTogglePopover(!togglePopover);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={css.userBar} ref={popoverRef}>
      <Button
        onClick={handleButtonClick}
        variant="secondary"
        className={css.userBarButton}
      >
        <p className={css.userBarName}>Nadia</p>
        <img
          className={css.userBarAvatar}
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-373-456325.png"
          alt="Avatar"
        />
        {togglePopover ? (
          <IconChevronUp className={css.iconChevronUp} />
        ) : (
          <IconChevronDown className={css.iconChevronDown} />
        )}
      </Button>

      {togglePopover && <UserBarPopover onClose={handleButtonClick} />}
    </div>
  );
};

export default UserBar;
