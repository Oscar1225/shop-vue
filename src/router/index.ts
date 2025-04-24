import { createRouter, createWebHistory } from 'vue-router'
import headerall from "@/components/header/header-all.vue"
import mainone from '@/components/main/main-one.vue'
import search from '@/components/header/catgories/search.vue'

const routes = [
  {
    path: '/',
    components: {
      header: headerall,
      main: mainone
    }
  },
  {
    path: "/cheap-phone",
    components: {
      header: headerall,
    }
  },
    {
    path: '/search',
    name: 'Search',
    components: {
    header:headerall,
      main:search,
    }
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
