<template>
  <div>
    <headerTop />

    <!-- 主導覽列 -->
    <div class="d-flex flex-column flex-md-row align-items-center justify-content-between bg-light py-3 px-3 px-md-5" style="min-height: 80px;">
      <!-- Logo -->
      <div class="fs-5 fs-md-4 fw-bold text-primary d-flex align-items-center mb-2 mb-md-0 me-md-4">
        <router-link
          to="/"
          class="text-decoration-none d-flex align-items-center"
          style="background-color: white; color: #FF5722;"
        >
          <i class="fa-solid fa-bag-shopping me-2"></i>
          <span class="text-nowrap">蝦皮購物 | 購物車</span>
        </router-link>
      </div>

      <!-- 搜尋欄 -->
      <div class="d-flex w-100 w-md-50">
        <el-input
          v-model="searchText"
          placeholder="搜尋商品關鍵字"
          class="flex-grow-1"
          size="large"
          :suffix-icon="Search"
          @keyup.enter="search"
        />
        <el-button
          type="primary"
          size="large"
          class="ms-2"
          @click="search"
          style="background-color: white; color: #FF5722; border: 1px solid #dcdfe6;"
        >
          搜尋
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import headerTop from './header-top.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

// 綁定輸入文字
const searchText = ref('')
const router = useRouter()

// 搜尋動作
const search = () => {
  const keyword = searchText.value.trim()
  if (keyword) {
    // 導航到搜尋結果頁
    router.push({ path: '/search', query: { keyword } })
  } else {
    // 顯示提示訊息
    ElMessage.warning('請輸入搜尋關鍵字')
  }
}
</script>
