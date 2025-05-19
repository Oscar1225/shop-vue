<template>
  <div class="d-flex mx-4 mt-3">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main class="ms-4 flex-grow-1 p-4 bg-white shadow-sm">
      <el-card class="mx-auto my-auto" style="width: 400px; height: 350px;" shadow="hover">
        <div class="d-flex flex-column align-items-center text-center">
          <span class="fs-1 mt-4">🛡️</span>
          <span class="mx-5 mt-3 mb-5">為保護您的帳戶安全，請選擇以下其中一種方式驗證您的身份</span>
          <el-button type="px-4 py-3"> 🔐 使用密碼驗證 </el-button>
        </div>
      </el-card>
      <div class="mx-auto" style="max-width: 600px;">
        <div class="small mt-5 mb-2 text-start text-body">Q: 為什麼要求我驗證帳戶?</div>
        <div class="small mt-2 mb-2 text-start text-secondary">A: 蝦皮一向非常重視您的帳戶安全。這裡提供一個全新驗證方法，確保您的帳戶免於威脅！</div>
        <div class="small mt-4 mb-2 text-start text-body">Q: 如果無法通過驗證，我該怎麼做?</div>
        <div class="small mt-2 mb-2 text-start text-secondary">A: 請聯繫蝦皮客服人員儘速為您確認。</div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
