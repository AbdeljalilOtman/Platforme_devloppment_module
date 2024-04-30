import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/JobDetail/:id',
    name: 'JobDetail',
    component: () => import('../views/JobView.vue'),
    props: true
  },
  {
    path: '/JobEdit/:id',
    name: 'JobEdit',
    component: () => import('../views/JobEditView.vue'),
    props: true
  },
  {
    path: '/JobAdd',
    name: 'JobAdd',
    component: () => import('../views/JobAdd.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
