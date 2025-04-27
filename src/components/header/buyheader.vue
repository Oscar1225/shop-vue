<template>
    <div>
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
            <a href="#">註冊</a> |
            <a href="#">登入</a>
            </div>
        </div>
          <div class="main-nav">
            <div class="logo">
            <router-link to="/">
                <i class="fa-solid fa-bag-shopping buy"></i><span class="buy"> 蝦皮購物 | 購物車</span>
            </router-link>
            </div>
            <div class="search-bar">
            <input v-model="keyword" type="text" placeholder="搜尋商品關鍵字" @keyup.enter="search"/>
            <button  @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import headertop from '@/components/header/header-top.vue'
</script>
<style scoped>
    .top {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
        background: linear-gradient(to right, #FF5722, #FF7043);
        color: white;
        padding: 10px 20px;
  }

  .top .left, .right {
      display: flex;
      align-items: center;
      gap: 10px;
  }
  .left{
    margin-left: 20px;
  }
  .right{
    margin-right: 20px;
  }
  .top i {
      cursor: pointer;
  }
    a {
        color: inherit; 
        text-decoration: none; /* 去掉下划线 */
    }
    .main-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background:	#F5F5F5;
    height: 80px;
}
.logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 50px;
}
.search-bar {
    display: flex;
    width: 40%;
}

.search-bar input {
    width: 100%;
    padding: 8px;
    border-radius: 5px 0 0 5px;
    outline: none;
    border:2px solid #FF5722;
}

.search-bar button {
    background: #FF5722;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    width: 80px;
    margin-right: 50px;
}

.search-bar i {
    color: white;
    font-size: 16px;
}
.buy{
    color: #FF5722;
}
</style>