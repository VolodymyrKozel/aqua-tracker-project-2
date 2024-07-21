import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar.jsx';
import css from '../UserPanel/UserPanel.module.css';
import { selectUser } from '../../redux/users/selectors.js';

export const UserPanel = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.userPanel}>
      <h2 className={css.userPanelName}>
        Hello
        <span className={css.userPanelSpan}>, {user.name}</span>
      </h2>
      <UserBar user={user} />
    </div>
  );
};

export default UserPanel;
