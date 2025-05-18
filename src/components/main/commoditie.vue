<template>
  <div class="container py-4">
    <el-empty v-if="cartStore.cart.length === 0" description="貨物車是空的" />

    <div v-else>
      <!-- 商品列表 -->
      <div class="d-flex align-items-center fw-bold border-bottom py-2 text-secondary">
        <el-checkbox v-model="allSelected" @change="toggleSelectAll" />
        <div class="ms-3 flex-fill">商品</div>
        <div class="text-end me-3">價格</div>
        <div class="text-center">數量</div>
        <div class="text-end ms-3">總計</div>
        <div class="ms-3">操作</div>
      </div>

      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="d-flex align-items-center border-bottom py-3"
      >
        <el-checkbox v-model="item.selected" @change="updateAllSelected" />

        <!-- 商品圖片與資訊 -->
        <img :src="item.image" class="ms-3" style="width: 60px; height: 60px;" />
        <div class="flex-fill ms-3">
          <div class="text-muted small">{{ item.shopName }}</div>
          <div class="fw-bold">{{ item.name }}</div>
          <div class="text-secondary small" @click="toggleSpecSelector(item)" style="cursor: pointer;">
            規格：{{ item.spec }} <el-icon><arrow-down /></el-icon>
          </div>
        </div>

        <!-- 價格 -->
        <div class="text-end me-3">${{ item.price }}</div>

        <!-- 數量控制 -->
        <div class="d-flex align-items-center justify-content-center">
        <el-button @click="cartStore.decrease(item.id)" size="small" :icon="Minus" />
        <div class="mx-2">{{ item.quantity }}</div>
        <el-button @click="cartStore.increase(item.id)" size="small" :icon="Plus" />
        </div>

        <!-- 總價 -->
        <div class="text-end text-danger ms-3">${{ item.price * item.quantity }}</div>

        <!-- 刪除 -->
        <div class="ms-3">
        <el-button type="text" @click="cartStore.removeFromCart(item.id)">刪除</el-button>
        </div>
        </div>

      <!-- 結帳區 -->
      <div class="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
        <div>
          <el-checkbox v-model="allSelected" @change="toggleSelectAll">全選</el-checkbox>
        </div>
        <div class="fw-bold fs-5">總金額：${{ Math.round(cartStore.totalPrice || 0) }}</div>
        <el-button type="primary" size="large" style="background-color: #ee4d2d; border-color: #ee4d2d;">去買單</el-button>
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

watch(
  () => cartStore.cart,
  () => {
    allSelected.value = cartStore.cart.length > 0 && cartStore.cart.every(item => item.selected)
  },
  { deep: true, immediate: true }
)

function toggleSelectAll() {
  cartStore.cart.forEach(item => {
    item.selected = allSelected.value
  })
}

function updateAllSelected() {
  allSelected.value = cartStore.cart.length > 0 && cartStore.cart.every(item => item.selected)
}

function toggleSpecSelector(item: any) {
// 可擴充此功能來顯示商品規格的下拉選單
  console.log('Toggle spec selector for', item.id)
}
</script>
