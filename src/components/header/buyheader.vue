<template>
    <div>
        <headerTop/>
          <div class="main-nav">
            <div class="logo">
            <router-link to="/">
                <i class="fa-solid fa-bag-shopping buy"></i><span class="buy"> 蝦皮購物 | 購物車</span>
            </router-link>
            </div>
            <div class="search-bar">
            <input type="text" placeholder="搜尋商品關鍵字"/>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import headerTop from './header-top.vue';
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