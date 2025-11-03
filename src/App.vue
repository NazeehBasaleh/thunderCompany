<template>
  <div :class="{'rtl': isRtl, 'ltr': !isRtl}">
    <HeaderComponent style="position: fixed;z-index: 1000;" />
    <router-view />  
    <AppFooter />
  </div>
</template>

<script>
import { useAppStore } from './stores/app'
import HeaderComponent from './components/CustomHeader.vue'
import AppFooter from './components/CustomFooter.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AppFooter
  },
  setup() {
    const { locale } = useI18n()   // <-- expose locale
    
    return { locale }
  },
  computed: {
    isRtl() {
      const appStore = useAppStore()
      return appStore.isRtl
    }
  },
}
</script>

<style>
.rtl {
  direction: rtl;
  text-align: right;
}

.ltr {
  direction: ltr;
  text-align: left;
}
</style>