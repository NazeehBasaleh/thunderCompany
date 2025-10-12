import { createRouter, createWebHistory } from 'vue-router'

import AllPages from '../views/AllPages.vue'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/:lang?/',
    name: '/',
    component: AllPages
  },
  {
    path: '/:lang?/home',
    name: '',
    component: AllPages
  },
  {
    path: '/:lang/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/:lang/about',
    name: 'About',
    component: About
  },
  {
    path: '/:lang/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/:lang/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router