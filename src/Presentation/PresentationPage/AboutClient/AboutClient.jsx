import { Link } from 'react-router-dom';
import css from './AboutClient.module.css';
import sprite from '../../images/icons.svg';

const AboutClient = () => {
  return (
    <div className={css.AboutClient}>
      {/* <div className={css.AboutClientWrap}> */}
      <img
        src="../../../../src/Presentation/PresentationPage/AboutClient/ClientPhoto.jpg"
        alt="Client"
        className={css.photo}
      />
      <h2 className={css.title}>В&apos;ячеслав Маркóвич</h2>
      <ul className={css.details}>
        <li>46 років</li>
        <li>Практикуючий юрист</li>
        <li>Активно відвідує спортзал</li>
        <li>
          Також має хоббі, яке вимагає концентрації та багато часу - трейдер на
          Forex.
        </li>
        <li>
          Він організована особистість. Стиль життя потребує постійного
          розумового навантаження, часті онлайн-конференції. В&apos;ячеслав
          прагне досягти контролю у всьому, тому веде у додатку облік спожитих
          кілокалорій за добу. Відповідно, наступним кроком потребує
          функціонального та зручного додатку обліку спожитої води.
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
    // </div>
  );
};

export default AboutClient;
