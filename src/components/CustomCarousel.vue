<template>
  <div class="carousel-container">
    <div class="carousel" ref="carousel">
      <div v-for="(item, index) in items" :key="index" class="carousel-item" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
        <div class="carousel-img">
          <img :src="item.img" class="w-full h-full object-cover" :alt="item.title">
        </div>
        <div class="carousel-caption">
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="carousel-nav">
      <div v-for="(item, index) in items" :key="index" 
           :class="['carousel-dot', { active: currentIndex === index }]"
           @click="goToSlide(index)">
      </div>
    </div>
    
    <div class="carousel-arrow prev" @click="prevSlide">
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="carousel-arrow next" @click="nextSlide">
      <i class="fas fa-chevron-left"></i>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted ,computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Gemini1 from '../assets/img/Gemini_1.png';
import Gemini2 from '../assets/img/Gemini_2.png';
import Gemini3 from '../assets/img/Gemini_3.png';
import Gemini4 from '../assets/img/Gemini_4.png';

export default {
  name: 'CarouselComponent',
  setup() {
    const { t, tm } = useI18n();
    const carousel = ref(null);
    const currentIndex = ref(0);
    const autoPlay = ref(true);
    const intervalDuration = 5000;
    let intervalId = null;
    
    const items = computed(() => {
      // 1) جرّب tm أولاً (tm يعطيك الكائن/المصفوفة إذا موجودة في الموارد)
      const itemsFromTranslationAR = typeof tm === 'function' ? tm('about.hero.carousels') : null
      if (Array.isArray(itemsFromTranslationAR) && itemsFromTranslationAR.length > 0) {
        return itemsFromTranslationAR.map((item, index) => ({
          img: [Gemini1, Gemini2, Gemini3, Gemini4][index],
          title: item.title,
          description: item.description
        }));
      }

      // 2) fallback: استخدم t مع returnObjects (بعض الإصدارات تحتاج هذا الخيار)
      const itemsFromTranslationMAY = typeof t === 'function' ? t('about.hero.carousels', {}, { returnObjects: true }) : []
      
      if (Array.isArray(itemsFromTranslationMAY) && itemsFromTranslationMAY.length > 0) {
        return itemsFromTranslationMAY.map((item, index) => ({
          img: [Gemini1, Gemini2, Gemini3, Gemini4][index],
          title: item.title,
          description: item.description
        }));
      }}
    );
    
    const goToSlide = (index) => {
      currentIndex.value = index;
    };
    
    const nextSlide = () => {
      const nextIndex = (currentIndex.value + 1) % items.value.length;
      goToSlide(nextIndex);
    };
    
    const prevSlide = () => {
      const prevIndex = (currentIndex.value - 1 + items.value.length) % items.value.length;
      goToSlide(prevIndex);
    };
    
    const startAutoPlay = () => {
      stopAutoPlay();
      intervalId = setInterval(() => {
        nextSlide();
      }, intervalDuration);
    };
    
    const stopAutoPlay = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
    
    onMounted(() => {
      if (autoPlay.value) {
        startAutoPlay();
      }
    });
    
    onUnmounted(() => {
      stopAutoPlay();
    });
    
    return {
      carousel,
      items,
      currentIndex,
      goToSlide,
      nextSlide,
      prevSlide
    };
  }
};
</script>

<style scoped>
.carousel-container {
  @apply relative p-6 rounded-2xl my-8 overflow-hidden;
  background: linear-gradient(#0B1D41, #1C4BA7);
  box-shadow: 0 15px 30px rgba(11, 29, 65, 0.15);
}

.carousel {
  @apply flex overflow-hidden rounded-2xl;
  direction: ltr;
  border: 4px solid #b60910;
}

.carousel-item {
  @apply flex-none w-full h-full transition-transform duration-500 ease-in-out ;
  flex-shrink: 0;
}

.carousel-img {
  @apply w-full h-64 md:h-96 rounded-xl overflow-hidden;
}

.carousel-caption {
  @apply absolute bottom-0 left-0 right-0 p-4;
  background: linear-gradient(to top, rgba(11, 29, 65, 0.9), transparent);
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.carousel-nav {
  @apply flex mt-4 gap-3 justify-center;
}

.carousel-dot {
  @apply w-3 h-3 rounded-full cursor-pointer transition-all;
  background: rgba(255, 255, 255, 0.3);
}

.carousel-dot.active {
  @apply bg-[#b60910] scale-125;
}

.carousel-arrow {
  @apply absolute top-1/2 -translate-y-1/2 w-10 h-10 
         flex items-center justify-center cursor-pointer 
         rounded-full bg-white bg-opacity-80 
         transition-all duration-300 z-10
         shadow-md;
}

.carousel-arrow:hover {
  @apply bg-[#b60910] text-white bg-opacity-100;
}

.carousel-arrow.prev {
  @apply right-4;
}

.carousel-arrow.next {
  @apply left-4;
}
</style>