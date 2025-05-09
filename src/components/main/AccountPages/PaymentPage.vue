<template>
  <div class="ju">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main>
      <h2>銀行帳號/信用卡</h2>
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
  flex: 1;
  padding: 2rem;
  border: 10px solid beige;
  height: 650px;

  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center;     /* 垂直置中 */
}

main h2 {
  margin: 0; /* 避免預設外距造成不對齊 */
}


</style>

