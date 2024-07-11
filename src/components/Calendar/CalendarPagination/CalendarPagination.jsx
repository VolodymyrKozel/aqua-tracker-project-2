import { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Calendar from '../Calendar';
import css from './CalendarPagination.module.css';

function CalendarPagination() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  return (
    <>
      <div style={css.container}>
        <button style={css.button} onClick={handlePrevMonth}>
          {'<'}
        </button>
        <span style={css.dateText}>{format(selectedDate, 'MMMM, yyyy')}</span>
        <button style={css.button} onClick={handleNextMonth}>
          {'>'}
        </button>
      </div>
      <div className={css.calendar}>
        <Calendar month={selectedDate} currentDate={new Date()} />
      </div>
    </>
  );
}

export default CalendarPagination;
