<template>
  <div class="ju">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main>
      <h2>關務署實名認證</h2>
    </main>
  </div>
</template>

<script setup lang="ts">
  import AssidePage from '@/components/main/AccountPages/AssidePage.vue';
</script>
<style scoped>
.ju{
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;

}

main {
  margin-left: 20px;
  flex: 1;
  padding: 2rem;
  height: 650px;
  background-color: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center;     /* 垂直置中 */
}

main h2 {
  margin: 0; /* 避免預設外距造成不對齊 */
}


</style>

