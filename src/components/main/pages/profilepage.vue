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
  import AssidePage from './AssidePage.vue';
</script>
<style scoped>
.ju{
  display: flex;
}

main {
margin-top: 15px;
  flex: 1;
  padding: 2rem;
  border: 10px solid beige;
  height: 650px;
}

</style>

