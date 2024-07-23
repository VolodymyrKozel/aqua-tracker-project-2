import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../Calendar/CalendarPagination/CalendarPagination';
import WaterConsumptionChart from '../WaterConsumptionChart/WaterConsumptionChart';
import css from './MonthInfo.module.css';
import Icon from '../shared/Icon/Icon';
import { useTranslation } from 'react-i18next';

const MonthInfo = () => {
  const { t } = useTranslation();

  const [showCalendar, setShowCalendar] = useState(true);

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>{t('trackerPage.month')}</h1>
        <div className={css.wrapper}>
          <div className={css.header}>
            <CalendarPagination />
          </div>
          <div className={css.buttons}>
            <button onClick={toggleView} className={css.toggleButton}>
              {showCalendar ? (
                <Icon
                  className={css.icon}
                  width="20"
                  height="20"
                  id="icon-pie-chart-02"
                />
              ) : (
                <Icon
                  className={css.icon}
                  width="20"
                  height="20"
                  id="icon-part-of-circle"
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
