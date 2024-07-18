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

  const defaultAvatarURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TpgxWOkIYqLt3oEVJxj-USRyho-iADVb5w&s';

  const handleButtonClick = () => {
    setTogglePopover(!togglePopover);
  };

  const handleButtonClose = () => {
    setTogglePopover(false);
  };

  return (
    <div className={css.userBar} ref={popoverRef}>
      <Button
        onClick={handleButtonClick}
        variant="secondary"
        className={css.userBarButton}
      >
        <p className={css.userBarName}>{user.name}</p>
        <img
          className={css.userBarAvatar}
          src={user.avatarURL || defaultAvatarURL}
          alt="Photo"
        />
        {togglePopover ? (
          <IconChevronUp className={css.iconChevronUp} />
        ) : (
          <IconChevronDown className={css.iconChevronDown} />
        )}
      </Button>

      {togglePopover && <UserBarPopover onClose={handleButtonClose} />}
    </div>
  );
};

export default UserBar;
