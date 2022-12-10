import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import az from './az.json'
import en from './en.json'


i18n
.use(initReactI18next)
.init(
  {
    resources:{
      en: {translation:en},
      az: { translation: az}
    },
    lng:"az",
    fallbackLng:"az",
    interpolation:{escapeValue:false}
  }
)



export default i18n