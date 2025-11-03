<template>
  <section class="hero py-10 px-4 sm:px-6">
      <div class="container">
        <div class="title">
          <h1>{{ $t('home.title1') }}&nbsp;<span>{{ $t('home.title2') }}</span>&nbsp;{{ $t('home.title3') }}</h1>
          <h1><span>{{ $t('home.title4') }}</span>&nbsp;{{ $t('home.title5') }}</h1>
        </div>
        <p class="subtitle">{{ $t('home.subtitle') }}</p>
        <div class="btn-container flex flex-row justify-center gap-4 py-4 pb-10">
          <a href="#services" class="cta-button cta-button-primary">
            {{ $t('home.btn1') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"/></svg>
          </a>
          <a href="#contact" class="cta-button cta-button-secondary">
            {{ $t('home.btn2') }}
           <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
          </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 py-3 bg-white rounded-lg">
          <div 
              class="divider-card card-container p-3 text-center" 
              v-for="(card,index) in cards" 
              :key="index"
          >
              <p class="text-xl md:text-2xl font-bold text-[#b60910] pb-3">{{ card.num }}+</p>
              <p class="text-base lg:font-bold text-[#123DA5]">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'Home',
  setup() {
    const { t, tm } = useI18n()

    const cards = computed(() => {
      const raw = typeof tm === 'function' ? tm('home.cards') : null
      if (Array.isArray(raw)) return raw
    })
    
    return { 
      cards,
      t
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  background:linear-gradient(#00000080, #00000080),url('/src/assets/img/bg-hero.png'); 
  background-size: cover;
  background-position: center;
  display: flex;
  min-height: 100vh;
  align-items: center;
  text-align: center;
  color: white;
}
.title{
  @apply text-2xl md:text-3xl lg:text-4xl font-bold mb-3;
  justify-self: center;
}

.subtitle{
  @apply text-base md:text-lg lg:text-xl font-medium mb-3 px-3 lg:px-20 md:px-10 text-center text-white;
  
}

span{
  color: #b60910;
}



/* للشاشات الصغيرة جدًا */
@media (max-width: 340px) {
  .cta-button-primary,
  .cta-button-secondary {
    @apply text-xs;
  }
  
  .btn-icon {
    @apply w-3 h-3;
  }
}


.divider-card {
    border-inline-start: 3px solid #b60910;
}
.divider-card:nth-child(2n + 1) {
    border-inline-start: none;
}

@media (min-width: 768px) {
  .divider-card:nth-child(2n + 1) { 
      border-inline-start: 3px solid #b60910;
  }
  .divider-card:nth-child(4n + 1) { 
      border-inline-start: none;
  }
}

</style>