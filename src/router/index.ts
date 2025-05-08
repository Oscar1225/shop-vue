import { createRouter, createWebHistory } from 'vue-router'
import headerall from "@/components/header/header-all.vue"
import mainone from '@/components/main/main-one.vue'
import search from '@/components/main/search.vue'
import Footerall from '@/components/footer/footerall.vue'
import buy from "@/components/header/buyheader.vue"
import Commoditie from "@/components/main/commoditie.vue"
import AccountPage from '@/components/main/pages/AccountPage.vue'

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
      main:Commoditie,
    }
  },
  {
    path:"/account",
    name:"account",
    components: {
    header:headerall,
      main:AccountPage,
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
