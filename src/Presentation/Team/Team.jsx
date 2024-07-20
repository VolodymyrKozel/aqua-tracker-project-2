import { Link } from 'react-router-dom';
import css from './Team.module.css';
import sprite from '../../Presentation/images/icons.svg';

const Team = ({ teams }) => {
  return (
    <div className={css.Team}>
      <ul className={css.TeamList}>
        {teams.map(({ name, role, photo, id, description }, index) => (
          <li key={id} className={css.TeamListItem}>
            {index === 0 && (
              <Link className={css.goBackBtn} to="/present">
                <svg className={css.svg}>
                  <use href={`${sprite}#icon-chevron-left`} />
                </svg>
              </Link>
            )}
            <img className={css.TeamPhoto} src={photo} alt={name} />
            <h1 className={css.TeamName}>{name}</h1>
            <p className={css.TeamRole}>{role}</p>
            <p className={css.TeamDescription}>{description}</p>
            {role === 'Team Lead' && (
              <Link
                className={css.aboutClientBtn}
                to="/present/team/about-client"
              >
                <svg className={css.svg}>
                  <use href={`${sprite}#icon-chevron-right`} />
                </svg>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
