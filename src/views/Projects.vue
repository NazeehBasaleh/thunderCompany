<template>
    <section id="projects " >
      <main class="text-center mt-5">
        <h1 class="section-titel">{{$t('projects.main_title')}}</h1>
        <p class="text-base text-[#000] mb-5 px-8 font-medium">{{$t('projects.slogan')}}</p>
      </main>
      <div class="container my-7 px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 justify-items-center">
          <div class="relative w-full bg-white rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden" v-for="(item,index) in features" :key="index">
            <div class="relative h-[150px] border-b-2 border-[#b60910]">
              <img :src="item.img" alt="" class="w-full h-full object-cover">
              <div class="absolute w-full h-full inset-0 l-gradient"></div>
            </div>
            <div class="p-5 text-[#4E607B]">
              <div class="flex justify-between text-white">
                <p class="bg-[#0B1D41] p-2 px-3 rounded-2xl text-sm">{{  item.type }}</p>
                <p class="p-2 px-3 rounded-2xl text-sm" :class="item.status=== 'completed' ? 'bg-[#08D83F]' : 'bg-[#FFA500]'">{{ currentLang === 'en'? item.status:(item.status==='completed'?'مكتمل':'جاري') }}</p>
              </div>
              <p class="text-[#0B1D41] text-base font-bold pt-4">{{ item.title }}</p>
              <p class="text-[#4E607B] text-base font-medium pt-2">{{ item.description }}</p>
              <div class="bg-[#F9F9FA] mt-5 p-2 rounded-lg grid grid-cols-2 gap-4 text-sm font-light">
                <div class="flex gap-3 items-center"><img class="h-4 w-4" :src="loc" alt=""><p>{{  item.route }}</p></div>
                <div class="flex gap-3 items-center"><img class="h-4 w-4" :src="caland" alt=""><p>{{  item.duration }}</p></div>
                <div class="flex gap-3 items-center"><img class="h-4 w-4" :src="deta" alt=""><p>{{  item.period }}</p></div>
              </div>
              <p class="text-[#0B1D41] text-base font-bold pt-3 pb-2">{{$t('projects.f')}}</p>
              <div class="flex gap-3 p-1" v-for="(feature,index) in item.feature" :key="index"> <span class="bg-[#B60910] h-1 w-1 mt-3"></span><p class="text-base font-medium">{{ feature }}</p></div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <a href="#contact" class="bg-transparent  text-[#123DA5] cta-button cta-button-primary">
          {{t('projects.more_button')}}<svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"/></svg>
          </a>
        </div>
      </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import Gemini4 from '../assets/img/Gemini_4.png'
import loc from '../assets/icon/location.svg'
import caland from '../assets/icon/calendar.svg'
import deta from '../assets/icon/edit.svg'
export default {
  name: 'Projects',
  setup() {
    const { t ,tm,locale} = useI18n()

    const currentLang = computed(() => locale.value)

    const features = computed(() => {
      const raw = typeof tm === 'function' ? tm('projects.cards') : null
      if (Array.isArray(raw) && raw.length > 0) {return raw.map((item, index) => ({
          img: [Gemini4, Gemini4, Gemini4, Gemini4,Gemini4, Gemini4][index],
          title: item.title,
          description: item.description,
          type:  item.type,
          status:  item.status,
          duration:  item.duration,
          period:  item.period,
          route:  item.route,
          feature:  item.feature
        }));}

      const maybe = typeof t === 'function' ? t('projects.cards', {}, { returnObjects: true }) : []
      if (Array.isArray(maybe) && maybe.length > 0) {return maybe.map((item, index) => ({
          img: [Gemini4, Gemini4, Gemini4, Gemini4,Gemini4, Gemini4][index],
          title: item.title,
          description: item.description
        }));}
   })

    return {currentLang,deta, caland,loc,features,t }
  }
}
</script>

<style lang="scss">

.l-gradient{
    background:  linear-gradient(#123DA500 80%, #123ea57c  100%);
  }
</style>