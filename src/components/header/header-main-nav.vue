<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const keyword = ref('')
const router = useRouter()

const search = () => {
  if (keyword.value.trim()) {
    router.push({ path: '/search', query: { keyword: keyword.value } })
  }
}
</script>

<template>
  <div class="main-nav">
    <div class="logo">
      <router-link to="/">
        <i class="fa-solid fa-bag-shopping"></i> 蝦皮購物
      </router-link>
    </div>
    <div class="search-bar">
      <input v-model="keyword" type="text" placeholder="搜尋商品關鍵字" />
      <button  @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="cart-icon">
      <button><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  </div>

</template>

<style scoped>
.main-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.logo {
    font-size: 24px;
    font-weight: bold;
}
.search-bar {
    display: flex;
    width: 40%;
}

.search-bar input {
    width: 100%;
    padding: 8px;
    border-radius: 5px 0 0 5px;
    border: none;
    outline: none;
}

.search-bar button {
    background: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
}

.search-bar i {
    color: #FF5722;
    font-size: 16px;
}
.cart-icon {
    font-size: 24px;
    cursor: pointer;
}
.cart-icon button {
    background:#FF7043;
    color: white;
    border: none;
    padding: 8px 50px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    font-size: 25px;
}
</style>
