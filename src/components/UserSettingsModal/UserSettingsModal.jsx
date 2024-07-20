import Icon from '../shared/Icon/Icon';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';

export default function UserSettingsModal({ closeModal }) {
  return (
    <div className={css.container}>
      <div className={css.modal}>
        <h1 className={css.formTitle}>Setting</h1>
        <button
          onClick={closeModal}
          className={css.icon}
          aria-label="Close modal"
        >
          <Icon width={24} height={24} id={'icon-cross'} />
        </button>
      </div>
<<<<<<< HEAD

      <UserSettingsForm />
=======
      <UserSettingsForm closeModal={closeModal} />
>>>>>>> main
    </div>
  );
}
