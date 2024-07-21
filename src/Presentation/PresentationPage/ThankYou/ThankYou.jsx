import { Link } from 'react-router-dom';
import css from './ThankYou.module.css';
import sprite from '../../images/icons.svg';
import techSprite from '../../images/symbol-defs.svg';
// import yourImage from '../../Presentation/images/your-image.jpg'; // Замініть на шлях до вашої картинки

const ThankYou = () => {
  return (
    <div className={css.ThankYou}>
      <h1 className={css.ThankYouTitle}>Дякуємо за довіру!</h1>
      {/* 
      <img src={} alt="Опис картинки" className={css.ThankYouImage} /> */}

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
// const teachers = [
//   {
//     id: 1,
//     name: 'Викладач 1',
//     photo: 'path/to/photo1.jpg',
//     linkedin: 'https://www.linkedin.com/in/teacher1',
//   },
//   {
//     id: 2,
//     name: 'Викладач 2',
//     photo: 'path/to/photo2.jpg',
//     linkedin: 'https://www.linkedin.com/in/teacher2',
//   },
//   {
//     id: 3,
//     name: 'Викладач 3',
//     photo: 'path/to/photo3.jpg',
//     linkedin: 'https://www.linkedin.com/in/teacher3',
//   },
// ];
// <ul className={css.teachersList}>
//   {teachers.map(({ id, name, photo, linkedin }) => (
//     <li key={id} className={css.teacherItem}>
//       <img src={photo} alt={name} className={css.photo} />
//       <h2 className={css.ThankYouSubTitle}>{name}</h2>
//       <a href={linkedin} target="_blank" rel="noopener noreferrer">
//         LinkedIn
//       </a>
//     </li>
//   ))}
// </ul>;
