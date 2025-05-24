import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


// Header / Footer
import headerall from '@/components/header/header-all.vue'
import buy from "@/components/header/buyheader.vue"
import Footerall from '@/components/footer/footerall.vue'

// Main 區域元件
import mainone from '@/components/main/main-one.vue'
import search from '@/components/main/search.vue'
import Commoditie from '@/components/main/commoditie.vue'
import Notfoundpage from '@/components/main/notfoundpage.vue'

// Account 子頁
import profilepage from '@/components/main/AccountPages/profilepage.vue'
import PaymentPage from '@/components/main/AccountPages/PaymentPage.vue'
import AddressPage from '@/components/main/AccountPages/AddressPage.vue'
import ChangePasswordPage from "@/components/main/AccountPages/changePasswordPage.vue"
import CustomKYCPage from '@/components/main/AccountPages/CustomKYCPage.vue'
import NotificationSettingsPage from '@/components/main/AccountPages/NotificationSettingsPage.vue'
import PrivacySettingsPage from '@/components/main/AccountPages/PrivacySettingsPage.vue'
import MyPurchasePage from '@/components/main/AccountPages/MyPurchasePage.vue'
import NotificationsPage from '@/components/main/AccountPages/NotificationsPage.vue'
import MyVouchersPage from '@/components/main/AccountPages/MyVouchersPage.vue'
import MyShopeeCoinsPage from '@/components/main/AccountPages/MyShopeeCoinsPage.vue'
import PaymentRefundTransactionPage from '@/components/main/AccountPages/PaymentRefundTransactionPage.vue'

const routes: RouteRecordRaw[] = [
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
      main: Commoditie,
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

  {
    path: '/account/changepassword',
    name: 'changepassword',
    components: {
      header: headerall,
      main:ChangePasswordPage,
    }
  },
  {
    path: '/account/customkyc',
    name: 'customkyc',
    components: {
      header: headerall,
      main:CustomKYCPage,
    }
  },
  {
    path: '/account/notificationsettings',
    name: 'notificationsettings',
    components: {
      header: headerall,
      main:NotificationSettingsPage,
    }
  },
  {
    path: '/account/privacysettings',
    name: 'privacysettings',
    components: {
      header: headerall,
      main:PrivacySettingsPage,
    }
  },
  {
    path: '/account/mypurchase',
    name: 'mypurchase',
    components: {
      header: headerall,
      main:MyPurchasePage,
    }
  },
  {
    path: '/account/notifications',
    name: 'notifications',
    components: {
      header: headerall,
      main:NotificationsPage,
    }
  },
  {
    path: '/account/myvouchers',
    name: 'myvouchers',
    components: {
      header: headerall,
      main:MyVouchersPage,
    }
  },
  {
    path: '/account/myshopeecoins',
    name: 'myshopeecoins',
    components: {
      header: headerall,
      main:MyShopeeCoinsPage,
    }
  },
  {
    path: '/account/paymentrefundtransaction',
    name: 'paymentrefundtransaction',
    components: {
      header: headerall,
      main:PaymentRefundTransactionPage,
    }
  },
    {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    components: {
      header: headerall,
      main:Notfoundpage
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
