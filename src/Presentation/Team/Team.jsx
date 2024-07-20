import { useNavigate } from 'react-router-dom';
import css from './Team.module.css';

const Team = ({ teams }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/present/team/about-client');
  };

  const handleGoBack = () => {
    navigate('/present');
  };

  return (
    <div className={css.Team}>
      <ul className={css.TeamList}>
        {teams.map(({ name, role, photo, id, description }, index) => (
          <li key={id} className={css.TeamListItem}>
            {index === 0 && (
              <button className={css.goBackBtn} onClick={handleGoBack}>
                Go Back
              </button>
            )}
            <img className={css.TeamPhoto} src={photo} alt={name} />
            <h1 className={css.TeamName}>{name}</h1>
            <p className={css.TeamRole}>{role}</p>
            <p className={css.TeamDescription}>{description}</p>
            {role === 'Team Lead' && (
              <button className={css.aboutClientBtn} onClick={handleNavigate}>
                About Client
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
