<template>
  <div>
    <!-- 頂部導覽列 -->
    <div class="bg-light">
      <div
        class="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start py-2"
        style="height: auto;"
      >
        <router-link
          to="/help"
          class="d-flex align-items-center justify-content-center text-decoration-none mb-2 mb-md-0"
        >
          <i
            class="fa-solid fa-bag-shopping me-2 fs-3"
            style="color: #FF7043;"
          ></i>
          <span class="ms-1 fw-bold fs-5" style="color: #FF7043;">
            Shopee | 蝦皮幫助中心
          </span>
        </router-link>
        <div class="fw-bold fs-5" style="color: #FF7043;">蝦皮政策</div>
      </div>
    </div>

    <!-- 中間橘色區塊 + 搜尋框 -->
    <div class="py-5 text-center" style="background-color: #EE4D2D;">
      <h2 class="text-white mb-4">Hi, 需要幫忙嗎？</h2>
      <div class="container d-flex justify-content-center px-3">
        <el-input
          v-model="searchText"
          placeholder="遇到問題了？輸入關鍵字搜尋看看 (◕‿◕)"
          clearable
          class="w-100"
          style="max-width: 600px; background: white; border-radius: 8px; overflow: hidden;"
        >
          <template #append>
            <el-button
              type="danger"
              :icon="Search"
              style="background-color: #EE4D2D; color: white; border: 2px solid white;"
            />
          </template>
        </el-input>
      </div>
    </div>

    <!-- 提示訊息 -->
    <div class="container my-3 px-3">
      <el-alert
        v-if="showNotice"
        type="warning"
        show-icon
        :closable="true"
        @close="showNotice = false"
        class="rounded shadow-sm px-3"
        style="background-color: #FFF7E8; border: 1px solid #F5DEB3;"
      >
        <template #title>
          <div class="text-center small text-muted">
            因近期蝦皮受到惡劣氣候影響，部分門市已達收件量上限暫停寄件服務，且部分訂單可能會延遲 7 至 10 天配送，
            建議您多使用蝦皮 APP 中的貨態更新，造成不便，敬請見諒。
          </div>
        </template>
      </el-alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchText = ref('')
const showNotice = ref(true)
</script>

<style scoped>
/* 響應式字體調整 */
@media (max-width: 576px) {
  h2 {
    font-size: 1.5rem !important;
  }

  .fs-5 {
    font-size: 1rem !important;
  }

  .fs-3 {
    font-size: 1.25rem !important;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
