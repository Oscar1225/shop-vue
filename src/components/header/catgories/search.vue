<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'

const route = useRoute()
const keyword = computed(() => route.query.keyword?.toString() || '')

const filtered = computed(() =>
  products.filter(p =>
    p.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.description.toLowerCase().includes(keyword.value.toLowerCase())
  )
)
</script>

<template>
  <div class="search-title">
  </div>
  <div class="product-list">
    <div v-for="product in filtered" :key="product.id" class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button>購買</button>
    </div>
  </div>
</template>

<style scoped>
.search-title {
  text-align: center;
  margin: 20px 0;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.product-card {
  width: 180px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.product-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.product-card h3 {
  font-size: 16px;
  margin: 10px 0 5px;
}
.product-card p {
  color: #ff5722;
  font-weight: bold;
}
</style>
