<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/product'

let timeoutId: ReturnType<typeof setTimeout> | null = null
const route = useRoute()
const keyword = computed(() => route.query.keyword?.toString() || '')
const cartStore = useCartStore()
const showMessage = ref(false)
const messageText = ref('')

const filtered = computed(() =>
  products.filter(p =>
    p.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.description.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.shopName.toLowerCase().includes(keyword.value.toLowerCase())
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
    <div class="row justify-content-center">
      <div
        v-for="product in filtered"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
      >
        <el-card shadow="hover" class="text-center custom-card">
          <img
            :src="product.image"
            :alt="product.name"
            class="img-fluid mb-2 product-image"
            @click="addToCart(product)"
          />
          <h5>{{ product.name }}</h5>
          <p class="text-warning fw-bold">${{ product.price }}</p>
          <el-button
            type="primary"
            style="background:#FF5722;border: 1px solid #dcdfe6;"
            @click="addToCart(product)"
          >
            加入購物車
          </el-button>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  width: 100%;
  max-width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-image {
  cursor: pointer;
}
</style>
