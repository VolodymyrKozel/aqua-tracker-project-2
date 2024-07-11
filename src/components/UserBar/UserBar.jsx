import Button from '../shared/Button/Button.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
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
        // className={`${css.btn} ${css.userBarButton}`}
      >
        <p className={css.userBarName}>Nadia</p>
        <img src="" alt="" />
      </Button>
      <UserBarPopover />
    </div>
  );
};

export default UserBar;
