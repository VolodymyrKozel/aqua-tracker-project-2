import { useDispatch, useSelector } from 'react-redux';
import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import { IconChevronDown } from './IconChevronDown.jsx';
import { togglePopover } from '../../redux/popover/slice.js';
import css from './UserBar.module.css';
import { selectIsVisible } from '../../redux/popover/selector.js';
import { IconChevronUp } from './IconChevronUp.jsx';

const UserBar = () => {
  const dispatch = useDispatch();
  const isPopoverOpen = useSelector(selectIsVisible);

  const handleButtonClick = () => {
    dispatch(togglePopover());
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

      {isPopoverOpen && <UserBarPopover onClose={handleButtonClick} />}
    </div>
  );
};

export default UserBar;
