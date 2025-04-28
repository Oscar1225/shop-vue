<script setup lang="ts" console.log(cartStore.cart)>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
/*import { colorOptions } from '@/src/data/colorOptions'
import { capacityOptions } from '@/src/data/capacityOptions'
*/
const cartStore = useCartStore()

// 🔥 定義用來記錄現在打開的商品（點選哪個商品開啟規格）
const activeItem = ref<any | []>([])
const currentSpec = ref<{ color: string; capacity: string }>({
  color: '',
  capacity: ''
});

// 🔥 點擊商品規格時，開關下拉彈窗
function toggleSpecSelector(item: any) {
  // 切換規格選擇器的顯示狀態
  if (activeItem.value === item.id) {
    activeItem.value = null
  } else {
    activeItem.value = item.id
  }
}

function confirmSpec(item: any) {
  item.spec = `${currentSpec.value.color} ${currentSpec.value.capacity}`
  activeItem.value = null
}
</script>

<template>
  <div class="cart-page">
    <!-- 購物車為空時顯示訊息 -->
    <div v-if="cartStore.cart.length === 0" class="text-gray-500 text-center py-8">
      購物車是空的
    </div>

    <!-- 顯示購物車商品 -->
    <div v-else>
      <!-- 商品列表 -->
      <div class="cart-list">
        <div class="list-checkbox"></div>
        <div class="list-product">商品</div>
        <div class="list-price">價格</div>
        <div class="list-number">數量</div>
        <div class="list-total">總計</div>
        <div class="list-operate">操作</div>
      </div>
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item flex items-center mb-6 border-b pb-4">

      <!-- 選擇框 -->
      <input type="checkbox" v-model="item.selected" class="mr-4 custom-checkbox" />

      <!-- 商品圖片 -->
      <img :src="item.image" alt="商品圖" class="product-image w-16 h-16 object-cover mr-4" />
        
      <!-- 商品資訊 -->
      <div class="product-info flex-1">
        <div class="shop-name font-bold">{{ item.shopName }}</div>
        <div class="product-title">{{ item.name }}</div>
        <div class="product-spec text-sm text-gray-500" @click="toggleSpecSelector(item)">規格：{{ item.spec }}
        <span class="dropdown-icon">▼</span>
        </div>
      </div>

      <!-- 規格選擇彈出層 -->
      <div v-if="activeItem.value === item.id" class="spec-selector-overlay">
        <div class="spec-selector-box">
        <!-- 下拉功能，顏色選擇-->
          <div class="spec-section">
          <div class="spec-label">顏色：</div>
          <div class="spec-options">
            <button
              v-for="color in colorOptions"
              :key="color"
              :class="{ selected: currentSpec.color === color }"
              @click="currentSpec.color = color"
            >
              {{ color }}
            </button>
          </div>
        </div>

      <!-- 容量選擇 -->
      <div class="spec-section">
          <div class="spec-label">容量：</div>
          <div class="spec-options">
            <button
              v-for="capacity in capacityOptions"
              :key="capacity"
              :class="{ selected: currentSpec.capacity === capacity }"
              @click="currentSpec.capacity = capacity"
            >
              {{ capacity }}
            </button>
          </div>
      </div>

      <!-- 確認按鈕 -->
      <div class="spec-actions">
        <button @click="confirmSpec(item)">確認</button>
        <button @click="activeItem.value = null">取消</button>
      </div>
    </div>
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
        總金額：${{ Math.round(cartStore.totalPrice || 0) }}
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
  grid-template-columns: 70px 90px 1fr 30px 190px 110px 80px;
  align-items: center;
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

/*商品列表*/
.cart-list{
  display: grid;
  grid-template-columns: 85px 1fr 100px 120px 100px 80px;
  align-items: center;
  background: #fafafa;
  padding: 15px;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  border-bottom: 2px solid #ddd;
}

/*勾選商品，顏色設定*/
.custom-checkbox {
  accent-color: #ff5722;
}

.product-image {
  left: 0;
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: row;
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
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.dropdown-icon {
  font-size: 10px;
  color: #666;
}

/* 選規格的彈窗 */
.spec-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spec-selector-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 320px;
}

.spec-section {
  margin-bottom: 20px;
}

.spec-label {
  margin-bottom: 8px;
  font-weight: bold;
}

.spec-options button {
  margin: 4px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
}

.spec-options button.selected {
  border-color: #ff5722;
  background: #ffece5;
}

.spec-actions button {
  margin: 10px 5px 0 0;
  padding: 8px 16px;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-price, .product-total {
  font-size: 16px;
  font-weight: bold;
}

.quantity-control {
  display: flex;
  justify-content: center;
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
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
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

