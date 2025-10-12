<template>
  <header class="header w-full line-bottom" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">
    <div class="container mx-auto nav-container">
      <div class="flex justify-between items-center w-full md:px-10 py-3 px-3">
        <!-- Logo -->
        <router-link :to="`/`">
          <div class="logo flex gap-3">
            <img src="/src/assets/img/Logo.png" class="bg-[#ffffff] p-2 rounded-2xl" alt="" width="50">
            <div class="text-logo place-content-center">
              <h1>{{ $t('app.name1') }} <span>{{ $t('app.name2') }}</span></h1>
            </div>
          </div>
        </router-link>

        <div class="hidden md:flex items-center space-x-8 gap-10">
          <!-- Navigation Links -->
          <ul class="nav-links" :class="[{ 'active': mobileMenuOpen },'flex gap-5 text-white']">
            <li v-for="(label, key) in navItems" :key="key" class="links">
              <router-link
                :to="`/${currentLang}/${routeKey(key)}`"
                @click="closeMobileMenu"
                active-class="active-link"
              >
                {{ label }}
                </router-link>
            </li>
          </ul>

          <!-- Language Switcher -->
          <div class="language-switcher p-2">
            <button
              @click="switchLanguage('ar')"
              :class="[ currentLang === 'ar' ?'exact-active':'','px-1']"
            >
              Ar
            </button>
            |
            <button
              @click="switchLanguage('en')"
              :class="[currentLang === 'en'?'exact-active':'','px-1']"
            >
              En
            </button>
          </div>
        </div>

        <div class="md:hidden flex gap-5 items-center">
          <div class="div-menu p-2 relative">
            <button @click="toggleLangeMenu" class="btn-lang">
              <img src="/src/assets/icon/global.svg" alt="">
            </button>
            
            <!-- قائمة اللغة المنبثقة للجوال -->
            <div
              class="lang-popup-menu absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 z-50"
              :class="mobileLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
            >
              <div class="">
                <a
                  href="#"
                  @click.prevent="clickAr"
                  :class="[currentLang === 'ar' ? 'bg-lang' : '', 'block px-4 py-2 text-sm']"
                >
                  عربي
                </a>
                <a
                  href="#"
                  @click.prevent="clickEn"
                  :class="[currentLang === 'en' ? 'bg-lang' : '', 'block px-4 py-2 text-sm']"
                >
                  English
                </a>
              </div>
            </div>
          </div>
          
          <div class="div-menu md:hidden p-2">
            <button @click="toggleMobileMenu" class="btn-menu">
              <img src="/src/assets/icon/menu.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Toggle -->
    <div
        id="mobile-menu"
        class="md:hidden overflow-hidden transition-all duration-300 line-top"
        :class="mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
      >
      <div class="flex flex-col space-y-4 pt-4 pb-6 px-4 bg-menu">
        <ul class="nav-links" :class="[{ 'active': mobileMenuOpen },'gap-5 text-white']"> 
          <li v-for="(label, key) in navItems" :key="key" class="">
            <router-link
              :to="`/${currentLang}/${routeKey(key)}`"
              @click="closeMobileMenu"
              active-class="active-link"
              >
              {{ label }}
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '../stores/app'
import { computed } from 'vue'

export default {
  name: 'HeaderComponent',
  setup() {
    const { t, locale } = useI18n()
    const appStore = useAppStore()

    // حل بديل إذا كان مفتاح nav غير موجود
    const navItems = computed(() => {
      const navTranslation = t('nav')
      
      // إذا لم يكن مفتاح nav موجوداً، نعود بقيم افتراضية
      if (typeof navTranslation === 'string' && navTranslation === 'nav') {
        return {
          home: locale.value === 'ar' ? 'الرئيسية' : 'Home',
          about: locale.value === 'ar' ? 'عن الشركة' : 'About Us',
          services: locale.value === 'ar' ? 'خدماتنا' : 'Services',
          projects: locale.value === 'ar' ? 'مشاريعنا' : 'Projects',
          contact: locale.value === 'ar' ? 'اتصل بنا' : 'Contact Us',
        }
      }
      
      return navTranslation
    })

    const currentLang = computed(() => locale.value)

    const switchLanguage = (lang) => {
      appStore.setLanguage(lang)
      locale.value = lang
      
      
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }

    return { 
      navItems, 
      currentLang, 
      switchLanguage,
      t
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      mobileLangOpen: false
    }
  },
  methods: {
    routeKey(key) {
      const map = { 
        home: '', 
        about: 'about', 
        services: 'services', 
        projects: 'projects', 
        contact: 'contact', 
      }
      return map[key] || key
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      this.mobileLangOpen = false
    },
    toggleLangeMenu(){
      this.mobileLangOpen = !this.mobileLangOpen
      this.mobileMenuOpen = false
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    closeMobileLang() {
      this.mobileLangOpen = false
    },
    clickAr(){
      this.switchLanguage('ar');
      this.closeMobileLang();
    },
    clickEn(){
      this.switchLanguage('en');
      this.closeMobileLang();
    }
  },
  mounted() {
    // تأكد من ضبط الاتجاه عند التحميل
    document.documentElement.lang = this.currentLang
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr'
    
    // إغلاق قائمة اللغة عند النقر خارجها
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style lang="scss">
.header {
  background: linear-gradient(to right, #123DA5 0%, #0B1D41 100%);
}

.text-logo{
  @apply text-sm lg:text-base font-bold;
  color: #ffffff;
}
span ,.router-link-exact-active ,.exact-active{
  color: #b60910;
}

.links {
  @apply text-sm lg:text-base lg:font-bold;
  &:hover{
    color: #b60910;
  }
}

.div-menu {
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #ffffff30;
  color: #fff;
  border-radius: 5px;
  
  // تأثير hover للأجهزة التي تدعمه (أجهزة غير لمسية)
  @media (hover: hover) {
    &:hover {
      background-color: #b60910;
    }
  }
  
  // تأثير active للأجهزة اللمسية
  &:active {
    background-color: #b60910;
  }
}

.language-switcher {
  @apply text-sm lg:text-base lg:font-bold;
  background-color: #ffffff40;
  color: #fff;
  border-radius: 25px;
}
.line-bottom{
  border-bottom:2px solid #b60910;
}
.line-top{
  border-top:2px solid #b60910;
}

/* تنسيقات إضافية للقائمة المنبثقة */
.lang-popup-menu {
  transform-origin: top right;
  top: 40px;
  color: #000000;
  font-size: 1rem;
  font-weight:bold ;
  transform: scale(0.95);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

.lang-popup-menu.opacity-100 {
  transform: scale(1);
}


[dir="rtl"] .lang-popup-menu {
  right: auto;
  left: 0;
}

.bg-lang{
  background-color: #b60910;
  color: #ffffff;
}
</style>