<template>
    <div class="d-flex justify-content-center my-3 px-2">
      <el-card class="p-3" shadow="always">
        <a href="#">
          <img :src="down" class="img-fluid" />
        </a>
      </el-card>
    </div>
</template>
  
  <script setup lang="ts">
    import down from '@/assets/image/down.png'
  </script>
  