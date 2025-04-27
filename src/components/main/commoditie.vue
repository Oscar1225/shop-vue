<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="cart-page">
    <!-- 購物車為空時顯示訊息 -->
    <div v-if="cartStore.cart.length === 0" class="text-gray-500 text-center py-8">
      購物車是空的
    </div>

    <!-- 顯示購物車商品 -->
    <div v-else>
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item flex items-center mb-6 border-b pb-4">
        
        <!-- 選擇框 -->
        <input type="checkbox" v-model="item.selected" class="mr-4" />

        <!-- 商品圖片 -->
        <img :src="item.image" alt="商品圖" class="product-image w-16 h-16 object-cover mr-4" />
        
        <!-- 商品資訊 -->
        <div class="product-info flex-1">
          <div class="shop-name font-bold">{{ item.shopName }}</div>
          <div class="product-title">{{ item.name }}</div>
          <div class="product-spec text-sm text-gray-500">規格：{{ item.spec }}</div>
        </div>

        <!-- 商品價格 -->
        <div class="product-price text-right w-24">${{ item.price }}</div>

        <!-- 數量控制按鈕 -->
        <div class="quantity-control flex items-center mx-4">
          <button @click="cartStore.decrease(item.id)" class="px-2">-</button>
          <span class="px-2">{{ item.quantity }}</span>
          <button @click="cartStore.increase(item.id)" class="px-2">+</button>
        </div>

        <!-- 商品總價 -->
        <div class="product-total text-red-500 text-right w-24">
          ${{ item.price * item.quantity }}
        </div>

        <!-- 刪除按鈕 -->
        <div class="product-action">
          <button @click="cartStore.removeFromCart(item.id)" class="text-blue-500 ml-4">
            刪除
          </button>
        </div>
      </div>
    </div>

    <!-- 購物車總結區域 -->
    <div class="cart-summary py-4">
    <div class="font-bold text-lg text-right">
        總金額：{{ (cartStore.totalPrice || 0).toFixed(2) }}
    </div>

      <button class="checkout-button bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
        去買單
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  padding: 20px;
  background-color: #f5f5f5;
}

.cart-item {
  display: grid;
  grid-template-columns: 40px 80px 1fr 100px 120px 100px 80px;
  align-items: center;
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.shop-name {
  font-size: 12px;
  color: #999;
}

.product-title {
  font-weight: bold;
  font-size: 16px;
}

.product-spec {
  font-size: 12px;
  color: #666;
}

.product-price, .product-total {
  font-size: 16px;
  font-weight: bold;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-control button {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  background: white;
}

.product-action button {
  background: none;
  border: none;
  color: #ff4d4f;
  cursor: pointer;
}

.cart-summary {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
}

.checkout-button {
  background-color: #ff5722;
  color: #fff;
  padding: 10px 30px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

</style>

