import { Link } from 'react-router-dom';
import css from './ThankYou.module.css';
import sprite from '../../images/icons.svg';
import techSprite from '../../images/symbol-defs.svg';

const ThankYou = () => {
  return (
    <div className={css.ThankYou}>
      <h1 className={css.ThankYouTitle}>Дякуємо за довіру!</h1>

      <div className={css.buttons}>
        <Link className={css.goBackBtn} to="/present/team/technologies">
          <svg className={css.svg}>
            <use href={`${sprite}#icon-chevron-left`} />
          </svg>
        </Link>
        <div className={css.linkWrap}>
          <a
            className={css.projectLink}
            href="https://aqua-tracker-project-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Запрошуємо у додаток
            <svg className={css.icon}>
              <use href={`${techSprite}#icon-arrowlink`} />
            </svg>
          </a>
          <a
            className={css.repoLink}
            href="https://github.com/VolodymyrKozel/aqua-tracker-project-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend repository
            <svg className={css.icon}>
              <use href={`${techSprite}#icon-github`} />
            </svg>
          </a>
          <a
            className={css.repoLink}
            href="https://github.com/VolodymyrKozel/aqua-tracker-project-2-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend repository
            <svg className={css.icon}>
              <use href={`${techSprite}#icon-github`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
