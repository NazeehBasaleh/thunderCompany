import { createRouter, createWebHistory } from 'vue-router'
import AllPages from '../views/AllPages.vue'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import { i18n } from '../i18n'

const routes = [
  {
    path: '/',
    redirect: () => `/${localStorage.getItem('lang') || 'ar'}`
  },
  {
    path: '/:lang',
    name: 'all',
    component: AllPages,
    children: [
      // { path: 'home', name: 'home', component: Home },        // /:lang
      { path: 'services', name: 'services', component: Services }, // /:lang/services
      { path: 'about', name: 'about', component: About },           // /:lang/about
      { path: 'projects', name: 'projects', component: Projects }, // /:lang/projects
      { path: 'contact', name: 'contact', component: Contact }     // /:lang/contact
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => `/${localStorage.getItem('lang') || 'ar'}`
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const supportedLangs = ['ar', 'en']

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  if(!lang) return next(`/${localStorage.getItem('lang') || 'ar'}`)
  if(!supportedLangs.includes(lang)) return next('/ar')

  // تحديث i18n و document
  if(i18n.global.locale !== lang) {
    i18n.global.locale = lang
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  next()
})

export default router
