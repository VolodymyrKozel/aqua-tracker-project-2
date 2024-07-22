import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import WaterConsumptionChart from '../WaterConsumptionChart/WaterConsumptionChart';
import css from './MonthInfo.module.css';
import Icon from '../shared/Icon/Icon';

const MonthInfo = () => {
  const [showCalendar, setShowCalendar] = useState(true);

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Month</h1>
        <div className={css.wrapper}>
          <div className={css.header}>
            <CalendarPagination />
          </div>
          <div className={css.buttons}>
            <button onClick={toggleView} className={css.toggleButton}>
              {showCalendar ? (
                <Icon
                  className={css.icon}
                  width="8"
                  height="12"
                  id="icon-big-part-of-circle"
                />
              ) : (
                <Icon
                  className={css.icon}
                  width="8"
                  height="12"
                  id="icon-part-of-cirlce"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>{showCalendar ? <Calendar /> : <WaterConsumptionChart />}</div>
    </div>
  );
};

export default MonthInfo;
