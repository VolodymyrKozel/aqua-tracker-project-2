// import { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { enUS, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
// import Calendar from '../Calendar';
import css from './CalendarPagination.module.css';
import Icon from '../../shared/Icon/Icon';

// function CalendarPagination() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handlePrevMonth = () => {
//     setSelectedDate(subMonths(selectedDate, 1));
//   };

//   const handleNextMonth = () => {
//     setSelectedDate(addMonths(selectedDate, 1));
//   };
//   return (
//     <>
//       <div style={css.container}>
//         <button style={css.button} onClick={handlePrevMonth}>
//           {'<'}
//         </button>
//         <span style={css.dateText}>{format(selectedDate, 'MMMM, yyyy')}</span>
//         <button style={css.button} onClick={handleNextMonth}>
//           {'>'}
//         </button>
//       </div>
//       <div className={css.calendar}>
//         <Calendar month={selectedDate} currentDate={new Date()} />
//       </div>
//     </>
//   );
// }

// export default CalendarPagination;
const locales = {
  en: enUS,
  ua: uk,
};
const CalendarPagination = ({ selectedDate, setSelectedDate }) => {
  const { i18n } = useTranslation();
  const locale = locales[i18n.language] || enUS;
  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handlePrevMonth}>
        <Icon
          className={css.icon}
          width="8"
          height="12"
          id="icon-chevron-left"
        />
      </button>
      <p className={css.date}>{format(selectedDate, 'MMMM, yyyy', { locale })}</p>
      <button className={css.btn} onClick={handleNextMonth}>
        <Icon className={css.icon} id="icon-chevron-right" />
      </button>
    </div>
  );
};

export default CalendarPagination;
