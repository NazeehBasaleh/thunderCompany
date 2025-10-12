<template>
  <div :class="{'rtl': isRtl, 'ltr': !isRtl}">
    <HeaderComponent style="position: fixed;z-index: 1000;" />
    <router-view />  
    <FooterComponent />
  </div>
</template>

<script>
import { useAppStore } from './stores/app'
import HeaderComponent from './components/CustomHeader.vue'
import FooterComponent from './components/CustomFooter.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    isRtl() {
      const appStore = useAppStore()
      return appStore.isRtl
    }
  },
  created() {
    // تعيين اتجاه الصفحة عند التحميل
    const appStore = useAppStore()
    document.documentElement.dir = appStore.isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = appStore.language
  }
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