import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import { IconChevronDown } from './IconChevronDown.jsx';
import css from './UserBar.module.css';
import { IconChevronUp } from './IconChevronUp.jsx';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/users/selectors.js';

const UserBar = () => {
  const [togglePopover, setTogglePopover] = useState(false);
  const popoverRef = useRef(null);
  const user = useSelector(selectUser);

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
        <p className={css.userBarName}>{user.name}</p>
        <img className={css.userBarAvatar} src={user.avatarURL} alt="Photo" />
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
