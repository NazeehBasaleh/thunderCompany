<template>
    <section id="services" :key="$i18n.locale">
      <main class="text-center mt-5">
        <h1 class="section-titel">{{$t('services.main_title')}}</h1>
        <p class="text-base text-[#000] mb-5 px-8 font-medium">{{$t('services.slogan')}}</p>
      </main>
      <div class="container py-5 px-4 grid gap-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
          <div class="card overflow-hidden relative h-[400px]" v-for="(item,index) in services" :key="index">
            <div class="relative h-[140px]">
              <img :src="Gemini1" alt="" class="w-full h-full object-cover" />
              <div class="absolute w-full h-full inset-0 l-gradient"></div>
              <div class="absolute w-28 h-28 bottom-[-50px] transform rounded-full bg-white flex justify-center items-center" :class="locale.value === 'ar' ? 'right-[20px]' : 'left-[20px]'">
                <img :src="item.img" alt="" class="w-24 h-24 rounded-full bg-[#123DA5] object-fill p-2" />
              </div>
            </div>

            <div class="p-4 mt-10 flex flex-col justify-between h-[220px]">
              <div class="space-y-4">
                <h2 class="font-bold text-base text-[#123DA5]">{{ item.title }}</h2>
                <p class="text-[14px]">{{ item.description }}</p>
              </div>
              <span class="font-normal text-sm text-[#123DA5] hover:text-[#b60910]">{{ t('services.cta') }}</span>
            </div>
          </div>
        </div>
        <div class="all-cards sm:flex sm:justify-between text-center content-center ">
          <p class="content-center text-base md:text-lg lg:text-2xl font-bold sm:pb-0 pb-3 text-[#123DA5]">{{$t('services.regional_scope')}}</p>
          <div class="flex justify-center">
            <a href="#contact" class="cta-button cta-button-primary">
              {{$t('services.cta')}}
              <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
            </a>
          </div>
        </div>
        <div  class="relative my-3 rounded-lg overflow-hidden flex">
          <div class="absolute w-full h-full flex items-center justify-end">
            <img :src="Gemini2" alt="" class="inset-0 w-3/5 md:w-2/5 h-full object-cover z-0" />
          </div>
          <div class="absolute inset-0 ads z-10 " :class="locale.value === 'ar' ? 'gradient-ar' : 'gradient-en'"></div>
          <div class="relative z-20 p-4 justify-center w-3/5 md:w-2/5">
            <h2 class="section-titel text-white text-base font-bold">{{t('services.why_us.main_title')}}</h2>
            <div class="px-1">
              <p class="text-white text-base pb-2" v-for="(item,index) in features" :key="index"><span class="text-2xl font-bold">. </span>{{item}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import Gemini2 from '../assets/img/contact.png';
import Gemini1 from '../assets/img/Gemini_2.png';
import Services1 from '../assets/img/Services1.png';
import Services2 from '../assets/img/Services2.png';
import Services3 from '../assets/img/Services3.png';
import Services4 from '../assets/img/Services4.png';
export default {
  name: 'Services',
  setup() {
    const { t, tm ,locale} = useI18n()

     const features = computed(() => {
      // 1) جرّب tm أولاً (tm يعطيك الكائن/المصفوفة إذا موجودة في الموارد)
      const raw = typeof tm === 'function' ? tm('services.why_us.features') : null
      if (Array.isArray(raw)) return raw

      // 2) fallback: استخدم t مع returnObjects (بعض الإصدارات تحتاج هذا الخيار)
      const maybe = typeof t === 'function' ? t('services.why_us.features', {}, { returnObjects: true }) : []
      return Array.isArray(maybe) ? maybe : []
    }) 
    const services = computed(() => {
   
      const raw = typeof tm === 'function' ? tm('services.list') : null
      if (Array.isArray(raw) && raw.length > 0) {return raw.map((item, index) => ({
          img: [Services1, Services2, Services3, Services4][index],
          title: item.title,
          description: item.description
        }));}

      const maybe = typeof t === 'function' ? t('services.list', {}, { returnObjects: true }) : []
      if (Array.isArray(maybe) && maybe.length > 0) {return maybe.map((item, index) => ({
          img: [Services1, Services2, Services3, Services4][index],
          title: item.title,
          description: item.description
        }));}

   })

    return {
      services,
      locale,
      features,
      Gemini2,
      Gemini1,
      Services1,
      t
    }
  }
}
</script>

<style lang="scss">

.ads{
  @apply rounded-lg;
}

.gradient-ar {
  background: linear-gradient(to right,#123DA500 0%, #123DA5 40%, #0B1D41 100%);
}

.gradient-en {
  background: linear-gradient(to left,#123DA500 0%, #123DA5 40%, #0B1D41 100%);
}

.card{
  @apply  rounded-2xl bg-white shadow-sm hover:shadow-sm hover:shadow-[#123DA5] transition-shadow duration-300 hover:border-b-2 border-[#b60910];

  .l-gradient{
    background:  linear-gradient(#123DA500 50%, #123DA5 100%);
  }
}
</style>