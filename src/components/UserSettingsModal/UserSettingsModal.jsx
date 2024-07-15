import { useTranslation } from 'react-i18next';
import Icon from '../shared/Icon/Icon';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

import css from './UserSettingsModal.module.css';

export default function UserSettingsModal({ closeModal }) {
  const { t } = useTranslation();

  return (
    <div className={css.container}>
      <div className={css.nav}>
        <h1 className={css.formTitle}>{t('trackerPage.setting')}</h1>
        <Icon
          onClick={closeModal}
          className={css.icon}
          width={24}
          height={24}
          id={'icon-cross'}
        />
      </div>

      <UserSettingsForm />
    </div>
  );
}
