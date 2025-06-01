<template>
  <div class="container py-4">
    <!-- 空購物車顯示 -->
    <el-empty v-if="cartStore.cart.length === 0" description="貨物車是空的" />

    <div v-else>
      <!-- 商品列表表頭 -->
      <div class="d-flex align-items-center fw-bold border-bottom py-2 text-secondary">
        <el-checkbox v-model="allSelected" @change="toggleSelectAll" />
        <div class="ms-3 flex-fill">商品</div>
        <div class="text-end me-3">價格</div>
        <div class="text-center">數量</div>
        <div class="text-end ms-3">總計</div>
        <div class="ms-3">操作</div>
      </div>

      <!-- 商品項目 -->
      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="d-flex flex-column flex-md-row align-items-start align-items-md-center border-bottom py-3 gap-2"
      >
        <!-- 第一列：勾選、圖片、商品資訊 -->
        <div class="d-flex align-items-center w-100">
          <el-checkbox v-model="item.selected" @change="updateAllSelected" />
          <img :src="item.image" class="ms-3" style="width: 60px; height: 60px; object-fit: cover;" />
          <div class="flex-fill ms-3">
            <div class="text-muted small">{{ item.shopName }}</div>
            <div class="fw-bold">{{ item.name }}</div>
            <div class="text-secondary small" @click="toggleSpecSelector(item)" style="cursor: pointer;">
              規格：{{ item.spec }} <el-icon><arrow-down /></el-icon>
            </div>
          </div>
        </div>

        <!-- 第二列：價格、數量、總價、刪除（在手機上會自動換行） -->
        <div class="d-flex flex-wrap justify-content-between w-100 ps-4 ps-md-0">
          <!-- 單價 -->
          <div class="text-end me-3">${{ item.price }}</div>

          <!-- 數量控制 -->
          <div class="d-flex align-items-center justify-content-center my-2 my-md-0">
            <el-button @click="cartStore.decrease(item.id)" size="small" :icon="Minus" />
            <div class="mx-2">{{ item.quantity }}</div>
            <el-button @click="cartStore.increase(item.id)" size="small" :icon="Plus" />
          </div>

          <!-- 總價 -->
          <div class="text-end text-danger ms-3">${{ item.price * item.quantity }}</div>

          <!-- 刪除按鈕 -->
          <div class="ms-3">
            <el-button type="text" @click="cartStore.removeFromCart(item.id)">刪除</el-button>
          </div>
        </div>
      </div>

      <!-- 結帳區 -->
      <div class="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
        <div>
          <el-checkbox v-model="allSelected" @change="toggleSelectAll">全選</el-checkbox>
        </div>
        <div class="fw-bold fs-5">總金額：${{ Math.round(cartStore.totalPrice || 0) }}</div>
        <el-button type="primary" size="large" style="background-color: #ee4d2d; border-color: #ee4d2d;">
          去買單
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCartStore } from '@/stores/cart'
import { ArrowDown } from '@element-plus/icons-vue'
import { Plus, Minus } from '@element-plus/icons-vue'

const cartStore = useCartStore()

const allSelected = ref(false)

// 監聽購物車變化，自動同步全選勾選狀態
watch(
  () => cartStore.cart,
  () => {
    allSelected.value = cartStore.cart.length > 0 && cartStore.cart.every(item => item.selected)
  },
  { deep: true, immediate: true }
)

// 切換全選與否
function toggleSelectAll() {
  cartStore.cart.forEach(item => {
    item.selected = allSelected.value
  })
}

// 單項勾選變化時，檢查是否需更新全選狀態
function updateAllSelected() {
  allSelected.value = cartStore.cart.length > 0 && cartStore.cart.every(item => item.selected)
}

// 商品規格選單
function toggleSpecSelector(item: any) {
  console.log('Toggle spec selector for', item.id)
}
</script>

<style scoped>
/* 手機排版優化 */
@media (max-width: 480px) {
  /* 壓縮字體、按鈕與邊距，避免內容超出 */
  .el-button {
    min-width: 36px;
  }

  .text-end,
  .ms-3,
  .me-3 {
    font-size: 14px;
  }

  img {
    width: 50px !important;
    height: 50px !important;
  }
}
</style>
