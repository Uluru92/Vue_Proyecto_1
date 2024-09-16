import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import NewsView from '@/views/NewsView.vue'
import AlmacenamientoView from '../views/AlmacenamientoView.vue'
import DirectivasView from '../views/DirectivasView.vue'
import EmitsView from '../views/EmitsView.vue'
import FormulariosView from '../views/FormulariosView.vue'
import GeneralView from '../views/GeneralView.vue'
import LoginView from '../views/LoginView.vue'



const routes: Array<RouteRecordRaw> = [

  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/almacenamiento',
    name: 'almacenamiento',
    component: AlmacenamientoView
  },
  {
    path: '/directivas',
    name: 'directivas',
    component: DirectivasView
  },
  {
    path: '/emits',
    name: 'emits',
    component: EmitsView
  },
  {
    path: '/formularios',
    name: 'formularios',
    component: FormulariosView
  },
  {
    path: '/',
    name: 'general',
    component: GeneralView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
