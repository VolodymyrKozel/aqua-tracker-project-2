import { useEffect, useRef } from 'react';
import css from './CalendarItem.module.css';
import clsx from 'clsx';
import { isSameDay } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedDate } from '../../../redux/water/selectors';
import { getWaterDataDay } from '../../../redux/water/operations';
import { selectDailyNorma } from '../../../redux/users/selectors';
import { setDate } from '../../../redux/water/slice';

const CalendarItem = ({ data }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const dailyNorma = useSelector(selectDailyNorma);
  const handleClickDay = () => {
    const action = setDate(data.date);
    dispatch(action);
    dispatch(getWaterDataDay({ date: data.date, dailyNorma }));
  };
  const currentBtn = useRef();
  useEffect(() => {
    if (isSameDay(data.date, selectedDate)) {
      currentBtn.current.focus();
    }
  }, [data.date, selectedDate]);

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
