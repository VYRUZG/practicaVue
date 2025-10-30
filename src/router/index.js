import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vista1 from '../views/Vista1.vue' // 👈 Importamos tu vista

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/vista1', // 👈 Nueva ruta
      name: 'Vista1',
      component: Vista1
    }
  ],
})

export default router
