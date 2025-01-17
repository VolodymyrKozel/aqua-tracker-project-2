import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar.jsx';
import css from '../UserPanel/UserPanel.module.css';
import { selectUser } from '../../redux/users/selectors.js';
import { useTranslation } from 'react-i18next';

export const UserPanel = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  return (
    <div className="reactour__userPanelBtn">
    <div className={css.userPanel}>
      <h2 className={css.userPanelName}>
        {t('trackerPage.greeting')}
        <span className={css.userPanelSpan}>
          ,&nbsp;
          {user.name === 'unknown'
            ? user.email.substring(0, user.email.indexOf('@'))
            : user.name}
        </span>
      </h2>
    
      <div className="reactour__userPanelInfo">
        <UserBar user={user} />
      </div>
      </div>
      
    </div>
  );
};

export default UserPanel;
