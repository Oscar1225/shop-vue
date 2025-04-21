<template>
    <div class="four">
      <div class="pattern">
        <a href="#">
          <img :src="down" width="100%" height="100%" />
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import down from '@/assets/image/down.png'
  </script>
  
  <style scoped>
  .four{
        height:150px;
        display: flex;
        justify-content: center;  
        margin-right: 10px;
        margin-left: 10px;
    }
    .pattern{
        display: flex;
        justify-content: center;
        padding: 15px;
        background-color: #ffffff;
    }
  </style>
  