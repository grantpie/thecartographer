import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/template1/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/template2/',
        component: () => import('../views/template2/HomeView.vue')

    },
    {
        path: '/template1/',
        component: () => import('../views/template1/HomeView.vue')
    },
    {
      path: '/template1/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/template1/AboutView.vue')
    },
    {
        path: '/template1/contact',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/template1/ContactView.vue')
      },


  ]
})

export default router
