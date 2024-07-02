'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { localStorageGetItem } from 'src/utils/storage-available';

import { defaultLang } from './config-lang';
import translationUz from './langs/uz.json';
import translationRu from './langs/ru.json';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translations: translationUz },
      ru: { translations: translationRu },
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
