<template>
  <div class="top">
    <div class="left">
      <a href="#">賣家中心</a> |
      <a href="#">開始隨拍即賣!</a> |
      <a href="#">下載</a> |
      <a href="#">追蹤我們</a>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-line"></i>
    </div>
    <div class="right">
      <a href="#"><i class="fa-regular fa-bell"></i> 通知總覽</a> |
      <a href="#"><i class="fa-solid fa-question"></i> 幫助中心</a> |
      <a href="#"><i class="fa-solid fa-globe"></i> 繁體中文 ▼</a> |

      <div class="account-menu">
        <span class="account-name" @click="toggleMenu"><i class="fa-solid fa-circle-user"></i> qw99g13tfs ▼</span>
        <div class="dropdown" v-if="showMenu">
          <a href="/account/profile">我的帳戶</a>
          <a href="#">購買清單</a>
          <a href="#">登出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const showMenu = ref(false)
  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

// 點擊頁面其他地方時關閉選單
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.account-menu')) {
      showMenu.value = false
    }
  })
</script>

<style scoped>
  a{
    color: inherit; 
    text-decoration: none;
  }
.top {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.top .left,
.top .right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.top i {
  cursor: pointer;
}
.account-menu {
  position: relative;
  cursor: pointer;
}
.account-name {
  color:white;
}
.dropdown {
  position: absolute;
  top: 20px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.dropdown a {
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  white-space: nowrap;         /* 文字不換行 */
  width: 100%;                 /* 每個選項撐滿整個 dropdown 寬度 */
  box-sizing: border-box;
}

.dropdown a:hover {
  background-color: #f5f5f5;
}
</style>
