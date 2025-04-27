import { defineStore } from 'pinia'
import type { Product } from '@/data/products'  // 引用你的商品資料型別

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<Product & { quantity: number }>
  }),
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },
    increase(productId: number) {
      const item = this.cart.find(item => item.id === productId)
      if (item) item.quantity++
    },
    decrease(productId: number) {
      const item = this.cart.find(item => item.id === productId)
      if (item && item.quantity > 1) item.quantity--
    },
    clearCart() {
      this.cart = []
    }
  }
})
