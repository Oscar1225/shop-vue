<template>
  <div class="ju">
    <!-- 左側導覽欄 -->
    <AssidePage/>

    <!-- 右側內容區 -->
    <main>
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
}

</style>

