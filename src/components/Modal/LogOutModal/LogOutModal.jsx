import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/users/operations';

const LogOutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    closeModal();
  };
  return (
    <div className={css.logoutModal}>
      <Icon
        className={css.closeIcon}
        width="28"
        height="28"
        id="icon-cross"
        onClick={closeModal}
      />
      <h3 className={css.modalLogoutTitle}>Log out</h3>
      <p className={css.modalLogoutText}>Do you really want to leave?</p>
      <div className={css.modalButtonContainer}>
        <Button onClick={handleLogOut} variant="primary">
          Log out
        </Button>
        <Button variant="default" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default LogOutModal;
