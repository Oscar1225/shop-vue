<template>
  <div class="d-flex mx-3 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage />

    <!-- 右側內容區 -->
    <main
      class="ms-4 flex-grow-1 p-4 bg-white shadow d-flex justify-content-center align-items-center"
      style="height: 650px;"
    >
      <el-text tag="h1" class=" fw-bold text-center" style="font-size: 2rem;">關務署實名認證</el-text>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
