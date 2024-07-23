import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import css from './Header.module.css';
import { useTour } from '@reactour/tour'; 

export const Header = () => {
  const { i18n, t } = useTranslation();
  const { setIsOpen } = useTour();

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
        <button
            className={`first-step ${css.tour}`}
            onClick={() => setIsOpen(true)}
          >
            {t('header.guide')}
          </button>
      </div>
    </header>
  );
};
