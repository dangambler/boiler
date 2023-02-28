import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TRANSLATIONS } from './translations';

const resources = {
  en: {
    translation: TRANSLATIONS.en,
  },
  ru: {
    translation: TRANSLATIONS.ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
