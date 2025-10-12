<template>
  <section id="about" class="">
    <main class="header-about">
      <img src="/src/assets/img/Logo.png" class=" h-full object-contain rounded-xl p-2 bg-white" alt="">
    </main>
    <div class="container py-5 px-4 sm:px-6 grid gap-3">
      <div class="all-cards">
        <h2 class="section-titel">{{ $t('about.hero.title')}}</h2> 
        <p class="subtitle">
        {{ $t('about.hero.description')}}
        </p>
        <CustomCarousel />
      </div>
      
      <div class="all-cards">
        <h2 class="section-titel">{{ $t('about.vision.title')}}</h2>
        <p class="subtitle">
          {{ $t('about.vision.description')}}
        </p>
      </div>
      <div class="all-cards">
        <h2 class="section-titel">{{ $t('about.mission.title')}}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div class="value-card" v-for="(value,index) in values" :key="index">
            <div class="value-icon"><i :class="value.icon"></i></div>
            <h3 class="value-title text-[#123DA5] text-lg font-bold mb-3 md:mb-4">{{ value.title }}</h3>
            <p class="text-[#555] text-base">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import  CustomCarousel  from '../components/CustomCarousel.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'About',
  components:{CustomCarousel},
  setup(){
    const { t, tm } = useI18n()
     const values = computed(() => {
      // 1) جرّب tm أولاً (tm يعطيك الكائن/المصفوفة إذا موجودة في الموارد)
      const raw = typeof tm === 'function' ? tm('about.mission.values') : null
      if (Array.isArray(raw)) return raw

      // 2) fallback: استخدم t مع returnObjects (بعض الإصدارات تحتاج هذا الخيار)
      const maybe = typeof t === 'function' ? t('about.mission.values', {}, { returnObjects: true }) : []
      return Array.isArray(maybe) ? maybe : []
    })

    return { 
      values,
      t
    }
  }
}
</script>

<style lang="scss">

.header-about{
  @apply flex justify-center p-3;
  background: linear-gradient(to right, #0B1D41 0%, #123DA5 100%);
  border-bottom: 3px solid #b60910;
  box-shadow: 0 10px 30px rgba(11, 29, 65, 0.2);
  overflow: hidden;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  height: 70px;
}



.all-cards{
  @apply p-4 rounded-2xl bg-white mb-4;
  border-inline-start: 4px solid #b60910;
  box-shadow: 0 10px 25px rgba(11, 29, 65, 0.08);
  overflow: hidden;
}

.section-titel{
  @apply border-b-2 border-[#b60910] mb-4 pb-3 inline-block px-1 md:text-lg text-xl lg:text-3xl font-bold text-[#123DA5] ;
}
.subtitle{
  @apply text-base text-[#000] mb-5 font-medium text-justify;
}



.value-card {
  @apply p-4;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(11, 29, 65, 0.1);
  border-inline-end: 4px solid #b60910;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(11, 29, 65, 0.15);
  }
}

.value-icon{
  @apply text-[#b60910] text-4xl mb-4;
}
      

</style>