import { Link } from 'react-router-dom';
import css from './AboutProject.module.css';
import spriteIcons from '../../images/icons.svg'; // Спрайт для іконок навігації
import spriteSymbols from '../../images/symbol-defs.svg'; // Спрайт для іконок проекту

const AboutProject = () => {
  const projectDetails = [
    {
      id: 1,
      text: 'Допомагає розрахувати денну норму споживання води на основі багатофакторної моделі',
      icon: 'icon-water-hand',
    },
    {
      id: 2,
      text: 'Функціонал додатку дозволяє записати точний час та об`єм спожитої води',
      icon: 'icon-clock',
    },
    {
      id: 3,
      text: 'Зручний контроль споживання води',
      icon: 'icon-water-drop',
    },
    {
      id: 4,
      text: 'Персоналізація даних зі збереженням історії',
      icon: 'icon-calendar',
    },
    {
      id: 5,
      text: 'Позитивний результат мотивує вподальшому дотримуватись здорового режиму споживання води та показати чудовий приклад своїй сім`ї',
      icon: 'icon-cup',
    },
  ];

  return (
    <div className={css.AboutProject}>
      <div className={css.buttons}>
        <Link className={css.goBackBtn} to="/present/team/about-client">
          <svg className={css.svg}>
            <use href={`${spriteIcons}#icon-chevron-left`} />
          </svg>
        </Link>
        <Link className={css.aboutClientBtn} to="/present/team/technologies">
          <svg className={css.svg}>
            <use href={`${spriteIcons}#icon-chevron-right`} />
          </svg>
        </Link>
      </div>
      <h1 className={css.AboutProjectTitle}>Корисні "плюшки" додатку</h1>
      <ul className={css.detailsList}>
        {projectDetails.map(({ id, text, icon }) => (
          <li key={id} className={css.listItem}>
            <div>
              <svg className={css.icon}>
                <use href={`${spriteSymbols}#${icon}`} />
              </svg>
            </div>
            <p className={css.AboutProjectText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutProject;
