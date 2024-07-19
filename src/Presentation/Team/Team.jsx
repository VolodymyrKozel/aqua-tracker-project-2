import css from '../Team/Team.module.css';
import team from './team.json';
const Team = () => {
  return (
    <div className={css.Team}>
      <ul className={css.TeamList}>
        {team.map(({ name, role, photo, id, description }) => (
          <li key={id} className={css.TeamListItem}>
            <img className={css.TeamPhoto} src={photo} alt={name} />
            <h1 className={css.TeamName}>{name}</h1>
            <p className={css.TeamRole}>{role}</p>
            <p className={css.TeamDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
