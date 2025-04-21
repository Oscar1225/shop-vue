<template>
    <main>
        <div class="two">
            <div class="image-container">
                <button class="arrow-button arrow-left"><i class="fa-solid fa-arrow-left"></i></button>
                <img :src="one" alt="圖片">
                <button class="arrow-button arrow-right"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div class="a">
                <div class="g">
                    <img :src="two" width="100%" height="100%">
                </div>
                <div class="g">
                    <img :src="three" width="100%" height="100%">
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import one from '@/assets/image/ONE.png'
    import two from '@/assets/image/TWO.png'
    import three from '@/assets/image/THREE.png'
</script>

<style scoped>
    .two{
            height:350px;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
        }
        .a{
            flex-direction: column;
        }
        .g{
            width: auto;
            height: 50%;
        }
        .image-container {
            position: relative; /*疊在圖片上*/
            width: 100%;
            height: 100%;
        }
    
        .image-container img {
            width: 100%;
            height: 100%;
            display: block;/*圖片會完全符合容器寬度，並且不會有多餘的空白*/
        }
    
        .arrow-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 20px;
        }
    
        .arrow-left {
            left: 10px;
        }
    
        .arrow-right {
            right: 10px;
        }
    
        .arrow-button:hover {
            background-color: rgba(0, 0, 0, 0.7);
        }

</style>