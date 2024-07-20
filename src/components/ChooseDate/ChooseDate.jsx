import css from './ChooseDate.module.css';
import { format } from 'date-fns';

const ChooseDate = ({ selectedDate }) => {
  return (
    <h3 className={css.chooseDateTitle}>{format(selectedDate, 'd-MMMM')}</h3>
  );
};

export default ChooseDate;
