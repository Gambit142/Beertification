import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '@/views/ShowView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/beer/:id',
    name: 'show',
    component: ShowView
  }
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: NotFoundPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
