<template>
  <div class="d-flex mx-4 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage />

    <!-- 右側內容區 -->
    <main
      class="ms-4 flex-grow-1 p-4 bg-white shadow justify-content-center align-items-center d-flex"
      style="height: auto;"
    >
      <el-text tag="h2" class=" fw-bold text-center" style="font-size: 2rem;">關務署實名認證</el-text>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
