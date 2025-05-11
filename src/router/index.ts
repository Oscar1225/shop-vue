import { createRouter, createWebHistory } from 'vue-router'

// Header / Footer
import headerall from "@/components/header/header-all.vue"
import buy from "@/components/header/buyheader.vue"
import Footerall from '@/components/footer/footerall.vue'

// Main 區域元件
import mainone from '@/components/main/main-one.vue'
import search from '@/components/main/search.vue'
import Commoditie from '@/components/main/commoditie.vue'

// Account 子頁
import profilepage from '@/components/main/AccountPages/profilepage.vue'
import PaymentPage from '@/components/main/AccountPages/PaymentPage.vue'
import AddressPage from '@/components/main/AccountPages/AddressPage.vue'

const routes = [
  {
    path: '/',
    components: {
      header: headerall,
      main: mainone,
      footer: Footerall
    }
  },
  {
    path: '/search',
    name: 'Search',
    components: {
      header: headerall,
      main: search
    }
  },
  {
    path: '/buy',
    name: 'buy',
    components: {
      header: buy,
      main: Commoditie
    }
  },
  {
    path: '/account/profile',
    name: 'profile',
    components: {
      header: headerall,
      main:profilepage,
    }
  },
  {
    path: '/account/payment',
    name: 'payment',
    components: {
      header: headerall,
      main:PaymentPage,
    }
  },
  {
    path: '/account/address',
    name: 'address',
    components: {
      header: headerall,
      main:AddressPage,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
