import { useTranslation } from 'react-i18next';
import css from './ChooseDate.module.css';

const ChooseDate = () => {
  const { t } = useTranslation();

  return <h3 className={css.chooseDateTitle}>{t('trackerPage.today')}</h3>;
};

export default ChooseDate;
