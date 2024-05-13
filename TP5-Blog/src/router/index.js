import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/PDView/:id',
    name: 'PostDetailView',
    component: () => import('../views/PostDetailView.vue'),
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'TagRout',
    component:Home,
    props: true
  },
  {
    path: '/ArticleEdition/:id',
    name: 'ArticleEdit',
    component: () => import('../views/ArticleEditView.vue'),
    props: true
  },
  {
    path: '/CreatePost',
    name: 'AddArticle',
    component: () => import('../views/CreatePostView.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
