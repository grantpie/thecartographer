import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/template1/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/template1/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template1/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/template1/AboutView.vue')
    },
    {
        path: '/template1/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/template1/ContactView.vue')
      }
  ]
})

export default router
