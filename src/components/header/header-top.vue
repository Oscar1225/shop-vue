<template>
  <div
    class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 px-3 py-2 text-white small"
    style="background: linear-gradient(to right, #FF5722, #FF7043);"
  >
    <!-- 左側功能列 -->
    <div class="d-flex flex-wrap align-items-center gap-2">
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

    <!-- 右側功能列 -->
    <div class="d-flex flex-wrap align-items-center gap-2 justify-content-end mt-2 mt-md-0">
      <!-- 通知下拉 -->
      <el-dropdown trigger="click">
        <span class="text-white text-decoration-none" style="cursor: pointer;">
          <i class="fa-regular fa-bell"></i> 通知總覽 ▼
        </span>
        <template #dropdown>
          <div class="notification-panel">
            <div class="panel-header">最近收到的通知</div>
            <div class="panel-body">
              <div
                v-for="(item, index) in notifications"
                :key="index"
                class="notification-item"
                style="cursor: pointer;"
              >
                <div class="d-flex">
                  <div class="badge-label" :style="{ backgroundColor: item.color }">
                    {{ item.badge }}
                  </div>
                  <div class="ms-2 flex-grow-1">
                    <div class="fw-semibold text-dark" style="font-size: 14px;">
                      {{ item.title }}
                    </div>
                    <div class="text-muted small" style="font-size: 12px;">
                      {{ item.message }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              <a href="/account/Notifications" class="text-primary small">查看全部</a>
            </div>
          </div>
        </template>
      </el-dropdown>

      <span>|</span>
      <a href="/help" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none">
        <i class="fa-solid fa-question"></i> 幫助中心
      </a>
      <span>|</span>
      <a href="#" class="text-white text-decoration-none">
        <i class="fa-solid fa-globe"></i> 繁體中文 ▼
      </a>
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

const router = useRouter()
const dropdownRef = ref()

const handleProfileClick = () => {
  dropdownRef.value?.handleClose()
  router.push('/account/profile')
}

// 通知資料模擬
const notifications = ref([
  { badge: '免運加碼', title: '月底驚喜加碼！', message: 'OK Mart 全站 $299 起免運券，限時領取', color: '#00BCD4' },
  { badge: '25日限定', title: '商城瘋購節優惠券送達囉！', message: '10% 折扣等你用，先用先贏！', color: '#F44336' },
  { badge: '蝦皮抽獎', title: '快來抽 iPhone 16', message: '滿 $888 抽，週五免運還有 5 折券', color: '#E91E63' },
  { badge: '限時活動', title: '驚喜優惠又來囉', message: '5% 蝦幣人人有，天氣熱要電鍋新生活', color: '#FF9800' }
])
</script>

<style scoped>
.notification-panel {
  width: 100%;
  max-width: 90vw;
  min-width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: white;
  overflow: hidden;
  z-index: 9999;
}

.panel-header {
  font-weight: bold;
  font-size: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
}

.panel-body {
  max-height: 300px;
  overflow-y: auto;
}

.notification-item {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
}

.notification-item:hover {
  background-color: #f9f9f9;
}

.badge-label {
  color: #fff;
  padding: 4px 6px;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
}

.panel-footer {
  text-align: center;
  padding: 8px 0;
  background: #f8f8f8;
}
</style>
