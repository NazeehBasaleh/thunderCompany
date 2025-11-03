import { createI18n } from 'vue-i18n'
import ar from './locales/ar.json'
import en from './locales/en.json'

const savedLang = localStorage.getItem('lang') || 'ar'
const messages = {
  ar: ar,
  en:en
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'ar',
  fallbackLocale: 'ar',
  messages,
  silentFallbackWarn: true,
  missingWarn: false
})

document.documentElement.lang = savedLang
document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'
