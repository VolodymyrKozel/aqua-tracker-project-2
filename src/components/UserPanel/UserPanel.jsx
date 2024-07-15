import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar.jsx';
import css from '../UserPanel/UserPanel.module.css';
import { selectUser } from '../../redux/users/selectors.js';
import { useTranslation } from 'react-i18next';

export const UserPanel = ({ settings = {}, logout = {} }) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={css.userPanel}>
      <h2 className={css.userPanelName}>
      {t('trackerPage.greeting')}
        <span className={css.userPanelSpan}>, Nadia !{/* {user.name} */}</span>
      </h2>
      <UserBar settings={settings} logout={logout} user={user} />
    </div>
  );
};

export default UserPanel;
