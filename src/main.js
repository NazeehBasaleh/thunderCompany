import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css' 
// استيراد ملفات الترجمة
import ar from './locales/ar.json'
import en from './locales/en.json'

// تكوين i18n
const i18n = createI18n({
  legacy: false, // مهم لاستخدام Composition API
  locale: localStorage.getItem('lang') || 'ar',
  fallbackLocale: 'en',
  messages: { 
    ar, 
    en 
  },
  missing: (locale, key) => {
    console.warn(`[i18n] Key '${key}' not found in '${locale}' locale`)
    // يمكنك إرجاع قيمة افتراضية أو تركها فارغة
    return key
  }
})

// إنشاء وتكوين Pinia
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app')