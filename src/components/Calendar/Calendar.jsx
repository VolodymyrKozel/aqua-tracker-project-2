import { useSelector } from 'react-redux';
import css from './Calendar.module.css';
import CalendarItem from './CalendarItem/CalendarItem';
import {
  selectMonthlyWater,
  selectSelectedDate,
} from '../../redux/water/selectors';
import { format } from 'date-fns';
import Loader from '../shared/Loader/Loader';
import { getDaysInMonth } from '../../utils/dateFunctions';
import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
//import { SkeletonCalendar } from '../skeleton/SkeletonCalendar';

const Calendar = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const monthlyData = useSelector(selectMonthlyWater);
  const isLoading = useSelector(state => state.water.isLoading);

  const daysInMonth = getDaysInMonth(selectedDate);
  const days = useMemo(() => {
    return daysInMonth.map(day => {
      let value = 0;
      const dayFormatted = format(day, 'd');
      const dayString = format(day, 'yyyy-MM-dd');
      const foundItem = monthlyData.find(
        item => dayFormatted === item.dayOfMonth.toString()
      );
      if (foundItem) {
        value = foundItem.percentage;
      }
      return {
        day: dayFormatted,
        date: dayString,
        totalValue: value,
      };
    });
  }, [monthlyData]);

  return isLoading && !Array.isArray(days) ? (
    <Loader variant="center" />
  ) : (
    /*   <SkeletonCalendar /> */
    <div className={css.listContainer}>
      <motion.ul
        key={selectedDate}
        className={css.list}
        initial={{ y: '100vw' }} // Start off-screen to the right
        animate={{ y: 0 }} // Animate to the center
        exit={{ x: '-100vw' }} // Exit off-screen to the left
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        {days.map(item => (
          <CalendarItem data={item} key={item.day} />
        ))}
      </motion.ul>
    </div>
  );
};

export default Calendar;
