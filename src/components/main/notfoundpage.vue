<template>
  <div class="not-found-container">
    <el-empty
      :image-size="160"
      description="多勢啦… 讀取賣場資訊失敗… 請返回上一頁，再次嘗試"
    >
      <el-button type="warning" @click="goHome">返回首頁</el-button>
    </el-empty>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  /* 為了避免內容太寬，設最大寬度 */
  max-width: 100%;
  box-sizing: border-box;
}

:deep(.el-empty) {
  max-width: 100%;
  word-break: break-word; /* 長句不會衝出容器 */
  white-space: normal;
  padding: 1rem;
}

/* 小螢幕時額外優化 */
@media (max-width: 600px) {
  .not-found-container {
    padding: 1rem;
  }
  :deep(.el-empty__description) {
    font-size: 14px;
    line-height: 1.4;
  }
  :deep(.el-button) {
    font-size: 14px;
    padding: 8px 16px;
  }
}
</style>
