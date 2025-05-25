<template>
  <div class="shopee-header">
    <div class="container d-flex justify-content-between align-items-center py-2" style="height:60px">
      <router-link to="/" class="d-flex align-items-center text-decoration-none">
        <i class="fa-solid fa-bag-shopping me-2 text-white" style="font-size: 30px;"></i>
        <span class="help-center-text ms-1 fw-bold fs-5">蝦皮幫助中心</span>
      </router-link>
      <div class="text-white fw-bold fs-5">蝦皮政策</div>
    </div>
  </div>
</template>

<script setup>
// 無需 JS
</script>

<style scoped>
.shopee-header {
  background: blue
}
.help-center-text {
  color: white;
  font-weight: 500;
}
</style>
