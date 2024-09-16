import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import NewsView from '../views/NewsView.vue'
import AlmacenamientoView from '../views/AlmacenamientoView.vue'
import DirectivasView from '../views/DirectivasView.vue'
import EmitsView from '../views/EmitsView.vue'
import RequestView from '../views/RequestView.vue'
import ConsolasView from '../views/ConsolasView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    props: {
      Noticia1: "Spacestation Gaming take ALGS Split 2 Playoff title",
      Noticia2: "Black Myth: Wukong has sold 10 million units across all platforms",
      Noticia3: "Gen.G champions HBCU students pursuing gaming and esports careers",
      imagenNoticia1: "noticia1.jpg",
      imagenNoticia2: "noticia2.jpg",
      imagenNoticia3: "noticia3.jpg"
    }
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
    path: '/request',
    name: 'request',
    component: RequestView
  },
  {
    path: '/consolas',
    name: 'consolas',
    component: ConsolasView
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
