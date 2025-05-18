<template>
  <main class="container my-4">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-8 position-relative">
        <el-button
            class="position-absolute start-0 top-50 translate-middle-y"
            :icon="ArrowLeft"
            circle
            @click="prevImage"
        />
        <img :src="images[currentIndex]" alt="主圖" class="img-fluid w-100 rounded shadow" />
        <el-button
            class="position-absolute end-0 top-50 translate-middle-y"
            :icon="ArrowRight"
            circle
            @click="nextImage"
        />
      </div>
      <div class="col-md-4 d-flex flex-column justify-content-between mt-3 mt-md-0">
        <img :src="two" class="img-fluid mb-3 rounded shadow" />
        <img :src="three" class="img-fluid rounded shadow" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import one from '@/assets/image/ONE.png'
import two from '@/assets/image/TWO.png'
import three from '@/assets/image/THREE.png'
import { ref } from 'vue'

// 引入 Element Plus 的圖示元件
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

const images = [one] // 可以擴充陣列加入更多主圖
const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

