import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import css from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/users/operations';
import { useTranslation } from 'react-i18next';

const LogOutModal = ({ closeModal }) => {
  const { t } = useTranslation();
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
      <h3 className={css.modalLogoutTitle}>{t('modals.logout')}</h3>
      <p className={css.modalLogoutText}>{t('modals.leave')}?</p>
      <div className={css.modalButtonContainer}>
        <Button onClick={handleLogOut} variant="primary">
          {t('modals.logout')}
        </Button>
        <Button variant="default" onClick={closeModal}>
          {t('modals.cancel')}
        </Button>
      </div>
    </div>
  );
};

export default LogOutModal;
