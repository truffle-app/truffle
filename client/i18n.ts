import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import Backend from 'i18next-http-backend'
import i18n from 'i18next'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: en
      }
    },
    debug: true,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
