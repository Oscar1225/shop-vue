<template>
  <div class="d-flex justify-content-between align-items-center px-3 py-2 text-white small"style="background: linear-gradient(to right, #FF5722, #FF7043);">
    <!-- 左邊 -->
    <div class="d-flex align-items-center gap-2">
      <a href="#" class="text-white text-decoration-none">賣家中心</a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none">開始隨拍即賣!</a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none">下載</a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none">追蹤我們</a>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-line"></i>
    </div>

    <!-- 右邊 -->
    <div class="d-flex align-items-center gap-2">
      <a href="#" class="text-white text-decoration-none"><i class="fa-regular fa-bell"></i> 通知總覽</a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-question"></i> 幫助中心</a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-globe"></i> 繁體中文 ▼</a>
      <span>|</span>

      <!-- 帳戶選單 -->
      <el-dropdown trigger="click" ref="dropdownRef">
        <span class="btn btn-link text-white p-0 text-decoration-none">
          <i class="fa-solid fa-circle-user"></i> qw99g13tfs ▼
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleProfileClick">我的帳戶</el-dropdown-item>
            <el-dropdown-item>購買清單</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  // 路由實例
  const router = useRouter()

  // dropdown 元件實例
  const dropdownRef = ref()

  // 點擊「我的帳戶」時的動作
  const handleProfileClick = () => {
    dropdownRef.value?.handleClose()  // ✅ 關閉下拉選單
    router.push('/account/profile')   // ✅ 導頁
  }
</script>
