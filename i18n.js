import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';


i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)

.init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: {
            translation: en
        },
        ar: {
            translation: ar
        }
    },
    interpolation: {
        escapeValue: false
    }
});