import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
import { format, isToday } from 'date-fns';
import { selectSelectedDate } from '../../redux/water/selectors';

const ChooseDate = () => {
  const selectedDate = useSelector(selectSelectedDate);
  return (
    <h3 className={css.chooseDateTitle}>
      {isToday(selectedDate) ? 'Today' : format(selectedDate, 'd-MMMM')}
    </h3>
  );
};

export default ChooseDate;
