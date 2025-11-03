<template>
  <div class="pt-[70px]">
    <!-- عرض كل الصفحات فقط عند route الاسم all -->
    <Home v-if="$route.name === 'all'" />
    <About v-if="$route.name === 'all'" />
    <Services v-if="$route.name === 'all'" />
    <Projects v-if="$route.name === 'all'" />
    <Contact v-if="$route.name === 'all'" />

    <!-- أو عرض صفحة واحدة حسب route آخر -->
    <router-view v-else />
  </div>
</template>

<script>
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

export default {
  name: 'AllPages',
  components:{
    Home,About,Services,Projects,Contact
  }
}
</script>