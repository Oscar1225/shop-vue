<template>
  <div
    class="d-flex justify-content-between align-items-center px-3 py-2 text-white small"
    style="background: linear-gradient(to right, #FF5722, #FF7043);"
  >
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
      <!-- 通知下拉選單 -->
      <el-dropdown trigger="click">
        <span class="text-white text-decoration-none" style="cursor: pointer;">
          <i class="fa-regular fa-bell"></i> 通知總覽 ▼
        </span>
        <template #dropdown>
          <div class="notification-dropdown">
            <div class="dropdown-header fw-bold px-3 pt-2">最近收到的通知</div>
            <div class="dropdown-body">
              <div
                v-for="(item, index) in notifications"
                :key="index"
                class="notification-item px-3 py-2 border-bottom"
              >
                <div class="d-flex align-items-start gap-2">
                  <span class="badge text-bg-danger">{{ item.badge }}</span>
                  <div>
                    <div class="fw-semibold text-dark">{{ item.title }}</div>
                    <div class="small text-muted">{{ item.message }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-footer text-center py-2">
              <a href="#" class="text-primary small">查看全部</a>
            </div>
          </div>
        </template>
      </el-dropdown>

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

const router = useRouter()
const dropdownRef = ref()

const handleProfileClick = () => {
  dropdownRef.value?.handleClose()
  router.push('/account/profile')
}

const notifications = ref([
  { badge: '免運加碼', title: '月底驚喜加碼！', message: 'OK Mart 全站 $299 起免運券，限時領取' },
  { badge: '25日限定', title: '商城瘋購節優惠券送達囉！', message: '10% 折扣等你用，先用先贏！' },
  { badge: '蝦皮抽獎', title: '快來抽 iPhone 16', message: '滿 $888 抽，週五免運還有 5 折券' },
  { badge: '限時活動', title: '驚喜優惠又來囉', message: '5% 蝦幣人人有，天氣熱要電鍋新生活' }
])
</script>

<style scoped>
.notification-dropdown {
  width: 360px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.dropdown-body {
  max-height: 300px;
  overflow-y: auto;
}

.notification-item:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>
