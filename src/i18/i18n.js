import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import ua from './ua.json';
import en from './en.json';

i18n
  .use(Backend)              
  .use(LanguageDetector)     
  .use(initReactI18next)     
  .init({
    fallbackLng: 'en',       
    debug: true,           
    resources: {             
      en: { translation: en },
      ua: { translation: ua },
    },
    ns: ['translation'],     
    defaultNS: 'translation',
  });

export default i18n;
