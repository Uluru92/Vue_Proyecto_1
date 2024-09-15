import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
