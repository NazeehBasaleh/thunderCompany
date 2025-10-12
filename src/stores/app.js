import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    language: localStorage.getItem('lang') || 'ar',
    isRtl: (localStorage.getItem('lang') || 'ar') === 'ar'
  }),
  actions: {
    setLanguage(lang) {
      this.language = lang
      this.isRtl = lang === 'ar'
      localStorage.setItem('lang', lang)
      
      // تحديث اتجاه الصفحة
      document.documentElement.dir = this.isRtl ? 'rtl' : 'ltr'
      document.documentElement.lang = lang
    }
  },
  persist: true
})