import { Link } from 'react-router-dom';
import css from './AboutProject.module.css';
import sprite from '../../images/icons.svg';

const AboutProject = () => {
  return (
    <div className={css.AboutProject}>
      <div className={css.buttons}>
        <Link className={css.goBackBtn} to="/present/team/about-client">
          <svg className={css.svg}>
            <use href={`${sprite}#icon-chevron-left`} />
          </svg>
        </Link>
        <Link className={css.aboutClientBtn} to="/present/team/technologies">
          <svg className={css.svg}>
            <use href={`${sprite}#icon-chevron-right`} />
          </svg>
        </Link>
      </div>
      <ul className={css.detailsList}>
        <li className={css.listItem}>
          <p className={css.AboutProjectText}>
            Допомагає розрахувати денну норму споживання води на основі
            багатофакторної моделі.
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.AboutProjectText}>
            Функціонал додатку дозволяє записати точні час та обєм спожитої води
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.AboutProjectText}>
            Зручний контроль споживання води
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.AboutProjectText}>
            Персоналізація даних зі збереженням історі.
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.AboutProjectText}>
            Позитивний результат мотивує і вподальшому дотримуватись здорового
            режиму споживання води та показувати чудовий приклад у сімейному
            колі.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutProject;
