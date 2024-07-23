import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import css from './Header.module.css';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className={css.headerContainer}>
        <button
          type="button"
          className={clsx(css.languages, {
            [css.activeLanguage]: i18n.language === 'en',
          })}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={clsx(css.languages, {
            [css.activeLanguage]: i18n.language === 'ua',
          })}
          onClick={() => changeLanguage('ua')}
        >
        УКР
        </button>
      </div>
    </header>
  );
};
