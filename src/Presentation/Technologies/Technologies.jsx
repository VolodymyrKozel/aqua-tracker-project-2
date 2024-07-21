import { Link } from 'react-router-dom';
import css from './Technologies.module.css';
import techSprite from '../../Presentation/images/symbol-defs.svg';
import navSprite from '../../Presentation/images/icons.svg';

const Technologies = () => {
  const frontEndTechnologies = [
    { name: 'HTML/CSS', icon: 'icon-html5' },
    { name: 'CSS', icon: 'icon-css' },
    { name: 'JavaScript', icon: 'icon-javascript' },
    { name: 'React', icon: 'icon-react' },
    { name: 'Hookform/resolvers', icon: 'icon-hookform' },
    { name: 'Axios', icon: 'icon-axios' },
    { name: 'ReduxToolkit', icon: 'icon-redux' },
    { name: 'Pagination', icon: 'icon-pagination' },
    { name: 'react-tiny-popover', icon: 'icon-popover' },
  ];

  const backEndTechnologies = [
    { name: 'Node.js', icon: 'icon-node-js' },
    { name: 'MongoDB', icon: 'icon-mongodb' },
    { name: 'Swagger', icon: 'icon-swagger' },
    { name: 'Express', icon: 'icon-express' },
    { name: 'Mongoose', icon: 'icon-mongoose' },
  ];

  const utilities = [
    { name: 'VSCode', icon: 'icon-vscode' },
    { name: 'Figma', icon: 'icon-figma' },
    { name: 'Git', icon: 'icon-git' },
    { name: 'GitHub', icon: 'icon-github' },
  ];

  return (
    <div className={css.Technologies}>
      <h1 className={css.technologiesTitle}>Використані технології</h1>
      <div className={css.techColumns}>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Front-end</h2>
          <ul className={css.techList}>
            {frontEndTechnologies.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <svg className={css.icon}>
                  <use href={`${techSprite}#${tech.icon}`} />
                </svg>
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Back-end</h2>
          <ul className={css.techList}>
            {backEndTechnologies.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <svg className={css.icon}>
                  <use href={`${techSprite}#${tech.icon}`} />
                </svg>
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Utilities</h2>
          <ul className={css.techList}>
            {utilities.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <svg className={css.icon}>
                  <use href={`${techSprite}#${tech.icon}`} />
                </svg>
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.buttons}>
        <Link className={css.goBackBtn} to="/present/team/about-project">
          <svg className={css.svg}>
            <use href={`${navSprite}#icon-chevron-left`} />
          </svg>
        </Link>
        <Link className={css.aboutClientBtn} to="/present/team/thank-you">
          <svg className={css.svg}>
            <use href={`${navSprite}#icon-chevron-right`} />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Technologies;
