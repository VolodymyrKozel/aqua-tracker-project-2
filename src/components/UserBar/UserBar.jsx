import { useState } from 'react';
import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import { IconChevronDown } from './IconChevronDown.jsx';
import css from './UserBar.module.css';
import { IconChevronUp } from './IconChevronUp.jsx';

const UserBar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopoverOpen(prev => !prev);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className={css.userBar}>
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
        {isPopoverOpen ? (
          <IconChevronUp className={css.iconChevronUp} />
        ) : (
          <IconChevronDown className={css.iconChevronDown} />
        )}
      </Button>

      {isPopoverOpen && <UserBarPopover onClose={handleClosePopover} />}
    </div>
  );
};

export default UserBar;
