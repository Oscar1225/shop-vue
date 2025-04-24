<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'

const route = useRoute()
const keyword = computed(() => route.query.keyword?.toString() || '')//從目前的路由查詢字串中取得 keyword 這個參數的值。如果沒有的話就回傳空字串 ''。

const filtered = computed(() =>//這也是一個計算屬性，用來根據 keyword 對 products 陣列進行過濾。
  products.filter(p =>//假設 products 是一個商品陣列（你可能在別的地方定義了），這裡會根據條件留下符合搜尋關鍵字的項目。
    p.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
    p.description.toLowerCase().includes(keyword.value.toLowerCase())//如果 商品名稱 或 商品描述 包含關鍵字，就保留這個商品。
  )
)
function addToCart(product) {
  console.log('加入購物車：', product)
  // 這裡你可以之後接 API 或更新購物車狀態
}
</script>

<template>
  <div class="product-list">
    <div v-for="product in filtered" :key="product.id" class="product-card">
      <button class="b" @click="addToCart(product)">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p></button>
    </div>
  </div>
</template>

<style scoped>
.b {
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  /* 水平置中按鈕內的元素 */
  justify-content: center; /* 垂直置中按鈕內的元素 */
  text-align: center;
}
.search-title {
  text-align: center;
  margin: 20px 0;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* 卡片之間的距離 */
  justify-content: center; /* 水平置中整體列表 */
}
.product-card {
  width: 200px;
  height: 300px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;  /* 垂直置中內容 */
  justify-content: center; /* 水平置中內容 */
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
.b img {
  width: 100%;
  height: 100%;
}
</style>
