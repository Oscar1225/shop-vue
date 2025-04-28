import { defineStore } from 'pinia'
import type { Product } from '@/types/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<Product & { quantity: number, selected: boolean }>
  }),
  
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1, selected: false })
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
  },

  getters: {
    totalPrice(state) {
      return state.cart
        .filter(item => item.selected) // 只算有勾選的
        .reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }
})
