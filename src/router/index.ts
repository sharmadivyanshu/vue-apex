import CompressorMap from '@/views/CompressorMap.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'compressorMap',
      component: CompressorMap,
    },
  ],
})

export default router
