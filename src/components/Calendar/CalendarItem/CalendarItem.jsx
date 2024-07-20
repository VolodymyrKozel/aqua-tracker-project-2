import { useRef, useEffect } from 'react';
import css from './CalendarItem.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { getWaterDataDay } from '../../../redux/water/operations';
// import { selectDailyNorma } from '../../../redux/users/selectors';

const CalendarItem = ({ data, selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();
  //const dailyNorma = useSelector(selectDailyNorma);
  const handleClickDay = () => {
    setSelectedDate(data.date);
    dispatch(getWaterDataDay({ date: data.date, dailyNorma: '2000' }));
  };

  const currentBtn = useRef();

  useEffect(() => {
    if (selectedDate === data.date) {
      currentBtn.current.focus();
    }
  }, [selectedDate, data.date]);

  return (
    <li className={css.item} key={data.day}>
      <button
        ref={currentBtn}
        className={clsx(css.btn, data.totalValue < 100 && css.btnNotEnough)}
        onClick={handleClickDay}
      >
        <p className={css.number}>{data.day}</p>
      </button>
      <p className={css.percentage}>{data.totalValue}%</p>
    </li>
  );
};

export default CalendarItem;
