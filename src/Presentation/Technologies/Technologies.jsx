import { Link } from 'react-router-dom';
import css from './Technologies.module.css';
import techSprite from '../../Presentation/images/symbol-defs.svg';
import navSprite from '../../Presentation/images/icons.svg';

const frontEndTechnologies = [
  {
    name: 'HTML',
    icon: 'icon-html5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: 'icon-css',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: 'icon-javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { name: 'React', icon: 'icon-react', url: 'https://reactjs.org/' },
  {
    name: 'React-hook-form',
    icon: 'icon-react-hook-form',
    url: 'https://react-hook-form.com/',
  },
  {
    name: 'ReduxToolkit',
    icon: 'icon-redux',
    url: 'https://redux-toolkit.js.org/',
  },
  { name: 'Axios', icon: 'icon-axios', url: 'https://axios-http.com/' },
  { name: 'Yup', icon: 'icon-yup', url: 'https://github.com/jquense/yup' },
  { name: 'Vite', icon: 'icon-vite', url: 'https://vitejs.dev/' },
];

const backEndTechnologies = [
  { name: 'Node.js', icon: 'icon-node-js', url: 'https://nodejs.org/' },
  { name: 'MongoDB', icon: 'icon-mongodb', url: 'https://www.mongodb.com/' },
  { name: 'Swagger', icon: 'icon-swagger', url: 'https://swagger.io/' },
  { name: 'Express', icon: 'icon-ex', url: 'https://expressjs.com/' },
  { name: 'Mongoose', icon: 'icon-mongoose', url: 'https://mongoosejs.com/' },
  {
    name: 'Bcrypt',
    icon: 'icon-bcrypt',
    url: 'https://www.npmjs.com/package/bcrypt',
  },
  { name: 'Joi', icon: 'icon-joi', url: 'https://joi.dev/' },
  { name: 'Nodemailer', icon: 'icon-nmailer', url: 'https://nodemailer.com/' },
  {
    name: 'Cloudinary',
    icon: 'icon-cloudinary',
    url: 'https://cloudinary.com/',
  },
];

const utilities = [
  {
    name: 'VSCode',
    icon: 'icon-vscode',
    url: 'https://code.visualstudio.com/',
  },
  { name: 'Figma', icon: 'icon-figma', url: 'https://www.figma.com/' },
  { name: 'Git', icon: 'icon-git', url: 'https://git-scm.com/' },
  { name: 'GitHub', icon: 'icon-github', url: 'https://github.com/' },
  { name: 'ESLint', icon: 'icon-eslint', url: 'https://eslint.org/' },
  { name: 'Prettier', icon: 'icon-prettier', url: 'https://prettier.io/' },
  { name: 'Nodemon', icon: 'icon-nodemon', url: 'https://nodemon.io/' },
  { name: 'Vercel', icon: 'icon-vercel', url: 'https://vercel.com/' },
  {
    name: 'React-tiny-popover',
    icon: 'icon-react-tiny-popover',
    url: 'https://github.com/alexkrolick/react-tiny-popover',
  },
];

const Technologies = () => {
  return (
    <div className={css.Technologies}>
      <h1 className={css.technologiesTitle}>Використані технології</h1>
      <div className={css.techColumns}>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Front-end</h2>
          <ul className={css.techList}>
            {frontEndTechnologies.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.techLink}
                >
                  <svg className={css.icon}>
                    <use href={`${techSprite}#${tech.icon}`} />
                  </svg>
                  {tech.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Back-end</h2>
          <ul className={css.techList}>
            {backEndTechnologies.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.techLink}
                >
                  <svg className={css.icon}>
                    <use href={`${techSprite}#${tech.icon}`} />
                  </svg>
                  {tech.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.techColumn}>
          <h2 className={css.technologiesSubTitle}>Utilities</h2>
          <ul className={css.techList}>
            {utilities.map((tech, index) => (
              <li key={index} className={css.techListItem}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.techLink}
                >
                  <svg className={css.icon}>
                    <use href={`${techSprite}#${tech.icon}`} />
                  </svg>
                  {tech.name}
                </a>
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
