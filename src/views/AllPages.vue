<template>
    <Home/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
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