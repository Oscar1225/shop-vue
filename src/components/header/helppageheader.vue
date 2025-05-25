<template>
  <div class="shopee-header">
    <div class="container d-flex justify-content-between align-items-center py-2" style="height:60px">
      <router-link to="/" class="d-flex align-items-center text-decoration-none">
        <i class="fa-solid fa-bag-shopping me-2 text-danger" style="font-size: 30px;"></i>
        <span class="help-center-text ms-1 fw-bold">蝦皮幫助中心</span>
      </router-link>
      <div class="text-muted">蝦皮政策</div>
    </div>
  </div>
</template>

<script setup>
// 無需 JS
</script>

<style scoped>
.shopee-header {
  background-color: white;
  border-bottom: 4px solid #ee4d2d;
}
.help-center-text {
  color: #FF7043;
  font-weight: 500;
}
</style>
