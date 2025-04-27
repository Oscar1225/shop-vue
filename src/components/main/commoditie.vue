<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">購物車</h1>

    <div v-if="cartStore.cart.length === 0" class="text-gray-500">
      購物車是空的
    </div>

    <div v-else>
      <div 
        v-for="item in cartStore.cart" 
        :key="item.id" 
        class="flex items-center mb-4 border-b pb-4"
      >
        <img :src="item.image" alt="" class="w-16 h-16 object-cover mr-4" />
        <div class="flex-1">
          <div class="font-bold">{{ item.name }}</div>
          <div class="text-sm text-gray-500">規格：{{ item.spec }}</div>
        </div>
        <div class="w-24 text-right">${{ item.price }}</div>
        <div class="flex items-center mx-4">
          <button @click="cartStore.decrease(item.id)" class="px-2">-</button>
          <span class="px-2">{{ item.quantity }}</span>
          <button @click="cartStore.increase(item.id)" class="px-2">+</button>
        </div>
        <div class="text-red-500 w-24 text-right">
          ${{ item.price * item.quantity }}
        </div>
        <button @click="cartStore.removeFromCart(item.id)" class="text-blue-500 ml-4">
          刪除
        </button>
      </div>
    </div>
  </div>
</template>
