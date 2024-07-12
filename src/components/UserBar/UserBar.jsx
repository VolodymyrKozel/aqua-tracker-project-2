import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import { IconChevronDown } from './IconChevronDown.jsx';
import css from './UserBar.module.css';

const UserBar = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
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
        <IconChevronDown className={css.iconChevronDown} />
      </Button>
      <UserBarPopover />

      {/* {isPopoverOpen ? (
          <IconChevronUp className={css.iconChevronDown} />
        ) : (
          <IconChevronDown className={css.iconChevronDown} />
        )}
      </Button>
      {isPopoverOpen && <UserBarPopover />}
      <UserBarPopover /> */}
    </div>
  );
};

export default UserBar;
