import { createRouter, createWebHistory } from 'vue-router'
import headerall from "@/components/header/header-all.vue"
import mainone from '@/components/main/main-one.vue'
import search from '@/components/main/search.vue'
import Footerall from '@/components/footer/footerall.vue'
import buy from "@/components/header/buyheader.vue"

const routes = [
  {
    path: '/',
    components: {
      header: headerall,
      main: mainone,
      footer:Footerall
    }
  },
  {
    path: '/search',
    name: 'Search',
    components: {
    header:headerall,
      main:search,
    }
  },
    {
    path: '/buy',
    name: 'buy',
    components: {
    header:buy,
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
