<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/product'

let timeoutId: ReturnType<typeof setTimeout> | null = null
const route = useRoute()
const keyword = computed(() => route.query.keyword?.toString() || '')//從目前的路由查詢字串中取得 keyword 這個參數的值。如果沒有的話就回傳空字串 ''。
const cartStore = useCartStore()
const showMessage = ref(false)
const messageText = ref('')//

const filtered = computed(() =>//這也是一個計算屬性，用來根據 keyword 對 products 陣列進行過濾。
  products.filter(p =>//假設 products 是一個商品陣列（你可能在別的地方定義了），這裡會根據條件留下符合搜尋關鍵字的項目。
    p.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.description.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.shopName.toLowerCase().includes(keyword.value.toLowerCase())//如果 商品名稱 或 商品描述 包含關鍵字，就保留這個商品。
  )
)
function addToCart(product: Product) {
  cartStore.addToCart(product)
  messageText.value = `${product.name} 已加入購物車！`
  showMessage.value = true

  if (timeoutId) clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    showMessage.value = false
    timeoutId = null
  }, 1000)
}

</script>

<template>
  <el-alert
    v-if="showMessage"
    :description="messageText"
    type="success"
    class="mb-4"
    center
    :closable="false"
  />
  <h2 class="text-center my-4">
    <span class="text-danger">'{{ keyword }}'</span> 搜尋結果
  </h2>

  <div class="container">
    <div class="row">
      <div v-for="product in filtered" :key="product.id" class="col-md-3 mb-4" >
        <el-card shadow="hover" class="text-center" >
          <img :src="product.image" :alt="product.name" class="img-fluid mb-2" @click="addToCart(product)" />
          <h5>{{ product.name }}</h5>
          <p class="text-warning fw-bold">${{ product.price }}</p>
          <el-button type="primary" style="background:#FF5722;border: 1px solid #dcdfe6; " @click="addToCart(product)">加入購物車</el-button>
        </el-card>
      </div>
    </div>
  </div>
</template>

