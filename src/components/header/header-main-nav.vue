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
  <div class="container-fluid d-flex align-items-center justify-content-between py-2 px-0" style="margin-left: 15px;">
    <!-- 左邊：Logo -->
    <div class="fs-4 fw-bold">
      <router-link to="/" class="text-decoration-none text-white">
        <i class="fa-solid fa-bag-shopping me-2 text-white" ></i> 蝦皮購物
      </router-link>
    </div>

    <!-- 中間：搜尋欄 -->
    <div class="px-3" style="width:1100px;">
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
    <div>
      <router-link to="/buy">
        <el-button class="px-4 py-2 fs-5" style="background-color: #FF7043; border: none;color: white; margin-right: 90px;">
          <i class="fa-solid fa-cart-shopping me-2 fa-lg" ></i>
        </el-button>
      </router-link>
    </div>
  </div>
</template>