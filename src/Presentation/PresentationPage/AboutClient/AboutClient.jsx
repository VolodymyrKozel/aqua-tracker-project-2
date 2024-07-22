import { Link } from 'react-router-dom';
import css from './AboutClient.module.css';
import sprite from '../../images/icons.svg';

const AboutClient = () => {
  return (
    <div className={css.AboutClient}>
      <img
        src="../../../../src/Presentation/PresentationPage/AboutClient/ClientPhoto.jpg"
        alt="Client"
        className={css.photo}
      />
      <h2 className={css.title}>В&apos;ячеслав Маркóвич</h2>
      <ul className={css.details}>
        <li>46 років</li>
        <li>Практикуючий юрист</li>
        <li>Стабільно відвідує спортзал</li>
        <li>
          Має хоббі, яке потребує концентрації та багато часу - трейдер на
          Forex.
        </li>
        <li>
          Він організована особистість. Його стиль життя вимагає активного і
          розумового навантаження, часті онлайн-конференції. Так як
          В&apos;ячеслав прагне досягти контролю у всьому, він веде у додатку
          облік спожитих кілокалорій. Відповідно, наступний крок В&apos;ячеслава
          - це придбання функціонального та зручного додаток обліку спожитої
          води.
        </li>
      </ul>
      <Link className={css.goBackBtn} to="/present/team">
        <svg className={css.svg}>
          <use href={`${sprite}#icon-chevron-left`} />
        </svg>
      </Link>
      <Link className={css.aboutClientBtn} to="/present/team/about-project">
        <svg className={css.svg}>
          <use href={`${sprite}#icon-chevron-right`} />
        </svg>
      </Link>
    </div>
  );
};

export default AboutClient;
