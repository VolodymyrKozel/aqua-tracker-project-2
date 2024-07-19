import css from './PresentationPage.module.css';
import Welcome from '../Welcome/Welcome.jsx';
import { Helmet } from 'react-helmet-async';
import Team from '../Team/Team.jsx';
import { Route, Routes } from 'react-router-dom';
import team from '../Team/team.json';

const PresentationPage = () => {
  return (
    <div className={css.containerPage}>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="team" element={<Team teams={team} />} />
      </Routes>
    </div>
  );
};

export default PresentationPage;
