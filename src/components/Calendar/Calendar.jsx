import { useSelector } from 'react-redux';
import css from './Calendar.module.css';
import CalendarItem from './CalendarItem/CalendarItem';
import { selectMonthlyWater } from '../../redux/water/selectors';
import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const monthlyData = useSelector(selectMonthlyWater);
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);

  let days = [];
  let day = monthStart;

  while (day <= monthEnd) {
    let value = 0;
    const dayFormatted = format(day, 'd');
    const foundItem = monthlyData.find(
      item => dayFormatted === item._id.toString()
    );
    if (foundItem) {
      value = foundItem.totalValue;
    }

    days.push({
      _id: dayFormatted,
      date: format(day, 'yyyy-MM-dd'),
      totalValue: `${value}%`,
    });

    day = addDays(day, 1);
  }

  return (
    <>
      <ul className={css.list}>
        {days.map(item => (
          <CalendarItem
            data={item}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            key={item._id}
          />
        ))}
      </ul>
    </>
  );
};

export default Calendar;
