import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/edit-db',
      name: 'edit-db',
      component: () => import('../views/EditDatabaseView.vue')
    }
  ]
})

export default router
