// import Icon from '../shared/Icon/Icon';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

import css from './UserSettingsModal.module.css';

export default function UserSettingsModal() {
  return (
    <div>
      <h1 className={css.formTitle}>Setting</h1>
      {/* <Icon className={css.icon} width={24} height={24} id={'icon-cross'} /> */}

      <UserSettingsForm />
    </div>
  );
}
