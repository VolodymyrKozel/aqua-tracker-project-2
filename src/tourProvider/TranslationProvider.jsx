import { useTranslation } from 'react-i18next';
import { TourProvider } from '@reactour/tour';
import { getSteps } from './steps';

const TranslationProvider = ({ children }) => {
  const { t } = useTranslation();

  return <TourProvider steps={getSteps(t)}>{children}</TourProvider>;
};

export default TranslationProvider;