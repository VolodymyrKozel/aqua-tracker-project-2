import { useSelector } from 'react-redux';
import css from './Calendar.module.css';
import CalendarItem from './CalendarItem/CalendarItem';
import {
  selectMonthlyWater,
  selectSelectedDate,
} from '../../redux/water/selectors';
import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';
import Loader from '../shared/Loader/Loader';
//import { SkeletonCalendar } from '../skeleton/SkeletonCalendar';

const Calendar = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const monthlyData = useSelector(selectMonthlyWater);
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const isLoading = useSelector(state => state.water.isLoading);
  /* const daysInMonth = getDaysInMonth(selectedDate); */
  let days = [];
  let day = monthStart;

  while (day <= monthEnd) {
    let value = 0;
    const dayFormatted = format(day, 'd');
    const foundItem = monthlyData.find(
      item => dayFormatted === item.dayOfMonth.toString()
    );
    if (foundItem) {
      value = foundItem.percentage;
    }

    days.push({
      day: dayFormatted,
      date: format(day, 'yyyy-MM-dd'),
      totalValue: value,
    });

    day = addDays(day, 1);
  }

  return isLoading ? (
    <Loader variant="center" />
  ) : (
    /*   <SkeletonCalendar /> */
    <>
      <ul className={css.list}>
        {days.map(item => (
          <CalendarItem data={item} key={item.day} />
        ))}
      </ul>
    </>
  );
};

export default Calendar;
