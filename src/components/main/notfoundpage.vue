<!-- src/components/main/NotFound.vue -->
<template>
  <div class="container text-center py-5">
    <!-- Element Plus 空狀態插圖 -->
    <el-empty description="多勢啦… 讀取賣場資訊失敗… 請返回上一頁，再次嘗試">
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
.container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
