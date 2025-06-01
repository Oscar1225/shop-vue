<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElInput, ElButton } from 'element-plus'

const keyword = ref('')
const router = useRouter()

const search = () => {
  if (keyword.value.trim()) {
    router.push({ path: '/search', query: { keyword: keyword.value } })
  }
}
</script>

<template>
  <div
    class="container-fluid d-flex flex-wrap align-items-center justify-content-between py-2 px-3"
    style="row-gap: 10px; box-sizing: border-box;"
  >
    <!-- 左邊：Logo -->
    <div class="fs-4 fw-bold text-white me-3" style="white-space: nowrap;">
      <router-link to="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-bag-shopping me-2 text-white"></i> 蝦皮購物
      </router-link>
    </div>

    <!-- 中間：搜尋欄 -->
    <div class="flex-grow-1 mx-3" style="min-width: 200px; max-width: 100%;">
      <el-input
        v-model="keyword"
        placeholder="搜尋商品關鍵字"
        class="w-100"
        @keyup.enter.native="search"
      >
        <template #append>
          <el-button @click="search">
            <i class="fa-solid fa-magnifying-glass text-danger"></i>
          </el-button>
        </template>
      </el-input>
    </div>

    <!-- 右邊：購物車按鈕 -->
    <div class="me-3">
      <router-link to="/buy">
        <el-button
          class="px-4 py-2 fs-5"
          style="background-color: #FF7043; border: none; color: white;"
        >
          <i class="fa-solid fa-cart-shopping me-2 fa-lg"></i>
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* 確保沒有橫向捲動 */
.container-fluid {
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>
