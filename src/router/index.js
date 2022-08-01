import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import countriesDetail from '../views/countriesDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
    meta: {
      title: 'REST API Countries App - Homepage'
    }
  },
  {
    path: '/country/:common',
    name: 'countries detail',
    component: countriesDetail,
    props: true,
    meta: {
      title: 'REST API Countries App - country details'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
