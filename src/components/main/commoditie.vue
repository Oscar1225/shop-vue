<template>
    <div class="p-4">
      <!-- 商品列表 -->
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div v-for="product in products" :key="product.id" class="border p-4">
          <img :src="product.image" alt="" class="w-full h-32 object-cover mb-2" />
          <div class="font-bold">{{ product.name }}</div>
          <div class="text-gray-600">${{ product.price }}</div>
          <button @click="addToCart(product)" class="mt-2 bg-orange-500 text-white px-4 py-1 rounded">
            加入購物車
          </button>
        </div>
      </div>
  
      <!-- 購物車 -->
      <div class="border-t pt-4">
        <h2 class="text-xl font-bold mb-4">購物車</h2>
        <div v-for="item in cart" :key="item.id" class="flex items-center border-b py-2">
          <img :src="item.image" alt="" class="w-16 h-16 object-cover mr-4" />
          <div class="flex-1">
            <div>{{ item.name }}</div>
            <div class="text-gray-600 text-sm">規格: {{ item.spec }}</div>
          </div>
          <div>${{ item.price }}</div>
          <div class="flex items-center mx-4">
            <button @click="decreaseQty(item)">-</button>
            <span class="px-2">{{ item.quantity }}</span>
            <button @click="increaseQty(item)">+</button>
          </div>
          <div class="text-red-500">${{ item.price * item.quantity }}</div>
          <button @click="removeFromCart(item)" class="text-blue-500 ml-4">刪除</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 假資料，之後可以改成你的 API 資料
  const products = ref([
    { id: 1, name: '商品A', price: 100, image: 'https://via.placeholder.com/150', spec: '黑色' },
    { id: 2, name: '商品B', price: 200, image: 'https://via.placeholder.com/150', spec: '紅色' },
    { id: 3, name: '商品C', price: 300, image: 'https://via.placeholder.com/150', spec: '藍色' },
  ]);
  
  // 購物車陣列
  const cart = ref([]);
  
  // 加入購物車
  function addToCart(product) {
    console.log('加入購物車：', product);
    const existingItem = cart.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }
  
  // 增加數量
  function increaseQty(item) {
    item.quantity++;
  }
  
  // 減少數量
  function decreaseQty(item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      removeFromCart(item);
    }
  }
  
  // 移除商品
  function removeFromCart(item) {
    cart.value = cart.value.filter(p => p.id !== item.id);
  }
  </script>
  