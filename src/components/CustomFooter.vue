<template>
  <section class="hero">
      <div class="pb-5">
        <router-link :to="`/`">
          <div class="logo flex gap-3">
            <img src="/src/assets/img/Logo.png" class="bg-[#ffffff] p-2 rounded-2xl" alt="" width="50">
            <div class="text-logo place-content-center">
              <h1>{{ t('app.name1') }} <span>{{ t('app.name2') }}</span></h1>
            </div>
          </div>
        </router-link>
      </div>
      <div class="pb-5 flex flex-col md:flex-row justify-between gap-3">
        <div class="wi">
          <h2 class="section-titel text-white text-base font-bold">{{ t('footer.about')}}</h2>
          <p class="text-white text-base font-normal pb-3">{{ t('footer.slogan')}}</p>
          <div class="flex gap-4 items-center px-1">
            <a class="w-7 h-7 text-white"><i class="text-2xl fa-brands fa-facebook-f"></i></a>
            <a class="w-7 h-7 text-white"><i class="text-2xl fa-brands fa-instagram"></i></a>
            <a class="w-7 h-7 text-white"><i class="text-2xl fa-brands fa-x-twitter"></i></a>
            <a class="w-7 h-7 text-white"><i class="text-2xl fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="wi">
          <h2 class="section-titel text-white text-base font-bold">{{ t('footer.services_list.title')}}</h2> 
          <div class="px-1">
            <p class="text-white text-base pb-1" v-for="(item,index) in ourServices" :key="index">{{ item }}</p>
          </div>
        </div>
        <div class="wi">
          <h2 class="section-titel text-white text-base font-bold">{{ t('footer.locations.title')}}</h2>
          <div class="px-1">
            <p class="text-white text-base pb-1" v-for="(item,index) in ourLocations" :key="index">{{ item }}</p>
          </div>
        </div>
        <div class="wi">
          <h2 class="section-titel text-white text-base font-bold">{{ t('footer.navigation.quick_links')}}</h2>
          <div class="px-1">
            <a class="text-white text-base block pb-1 hover:text-[#b60910]" v-for="(item,index) in links" :href="item.link" :key="index">{{ item.name }}</a>
          </div>
        </div>
      </div>
      <div class="text-sm font-thin text-center text-white">
          <p>© 2025 ALRAAD BARAS CO. (الرعد للمقاولات والخدمات العامة). جميع الحقوق محفوظة.</p>
      </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
export default {
  name: 'footer',
  setup() {
    const { t,tm, locale } = useI18n()
    const appStore = useAppStore()

    const links = computed(() => {
      const raw = typeof tm === 'function' ? tm('footer.navigation.navigation') : null
      if (Array.isArray(raw)) return raw

      const maybe = typeof t === 'function' ? t('footer.navigation.navigation', {}, { returnObjects: true }) : []
      return Array.isArray(maybe) ? maybe : []
    })

    const ourServices = computed(() => {
      const raw = typeof tm === 'function' ? tm('footer.services_list.services_list') : null
      if (Array.isArray(raw)) return raw
      
      const maybe = typeof t === 'function' ? t('footer.services_list.services_list', {}, { returnObjects: true }) : []
      return Array.isArray(maybe) ? maybe : []
    })

    const ourLocations = computed(() => {
        const raw = typeof tm === 'function' ? tm('footer.locations.locations') : null
      if (Array.isArray(raw)) return raw

      const maybe = typeof t === 'function' ? t('footer.locations.locations', {}, { returnObjects: true }) : []
      return Array.isArray(maybe) ? maybe : []
    })

    const switchLanguage = (lang) => {
      appStore.setLanguage(lang)
      locale.value = lang
      
      
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
    return {links,ourServices,ourLocations,switchLanguage,t}
  },
}
</script>

<style scoped>
.hero {
  @apply p-5 md:px-10;
  background:  url('/src/assets/img/footer.png'),linear-gradient(#0B1D41, #123DA5);
  background-size: cover;
  background-position: center;
  align-items: center;
}

.wi{
  @apply mb-4;
  min-width: 200px;
  max-width: 300px;
}
</style>