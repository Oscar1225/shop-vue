<template>
  <div class="d-flex mx-4 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main class="ms-4 flex-grow-1 p-4 bg-white shadow-sm">
      <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
        <span class="h5">信用卡/金融卡</span>
        <div class="d-flex gap-2">
          <el-button type="mb-1 px-4 py-3"> + 新增信用卡 </el-button>
        </div>
      </div>
      <hr class="border-secondary-subtle mx-auto" style="width: 100%;">
      <div class="d-flex h5 mt-5 mb-5 align-items-center justify-content-center text-secondary">你還沒有卡片。</div>

      <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
        <span class="h5">銀行帳號</span>
        <div class="d-flex gap-2">
          <el-button type="mb-1 px-4 py-3"> + 新增銀行帳號 </el-button>
        </div>
      </div>
      <hr class="border-secondary-subtle mx-auto" style="width: 100%;">
      <div class="d-flex h5 mt-5 mb-5 align-items-center justify-content-center text-secondary">尚未有銀行帳號</div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
