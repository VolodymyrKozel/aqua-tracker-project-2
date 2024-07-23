import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
import { format, isToday } from 'date-fns';
import { selectSelectedDate } from '../../redux/water/selectors';
import { useTranslation } from 'react-i18next';

const ChooseDate = () => {
  const { t } = useTranslation();
  const selectedDate = useSelector(selectSelectedDate);
  return (
    <h3 className={css.chooseDateTitle}>
      {isToday(selectedDate)
        ? t('trackerPage.today')
        : format(selectedDate, 'd-MMMM')}
    </h3>
  );
};

export default ChooseDate;
