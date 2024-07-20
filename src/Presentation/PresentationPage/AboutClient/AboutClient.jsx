import { useNavigate } from 'react-router';
import css from './AboutClient.module.css';

const AboutClient = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/present/team/about-project');
  };

  const handleGoBack = () => {
    navigate('/present/team');
  };

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
        <li>Активно відвідує спортзал</li>
        <li>
          Також має хоббі, яке вимагає концентрації та багато часу - трейдер на
          Forex.
        </li>
        <li>
          Він організована особистість. Стиль життя потребує постійного
          розумового навантаження, часті онлайн-конференції. В&apos;ячеслав
          прагне досягти контролю у всьому. Тому, веде у додатку облік спожитих
          кілокалорій за добу, і наступним кроком потребує кваліфікованого і
          зручного додатку обліку спожитої води.
        </li>
      </ul>
      <div className={css.buttons}>
        <button className={css.goBackBtn} onClick={handleGoBack}>
          Go Back
        </button>
        <button className={css.aboutClientBtn} onClick={handleNavigate}>
          About Project
        </button>
      </div>
    </div>
  );
};

export default AboutClient;
