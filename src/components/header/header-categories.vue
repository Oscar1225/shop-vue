<template>
    <div class="categories">
        <router-link :to="{ path: '/search', query: { keyword: 'phone' } }">超便宜手機</router-link> |
        <a href="#">Nike官網</a> |
        <a href="#">學生裝</a> |
        <a href="#">行充20000mah</a> |
        <a href="#">假指甲貼片</a> |
        <a href="#">手飾</a> |
        <a href="#">解壓球捏捏</a> |
        <a href="#">拍立得相機</a> |
        <a href="#">軟骨頭沙發</a> |
        <a href="#">Jogging Pants Men</a> |
        <a href="#">流行包包</a>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
    .categories {
        display: flex;
        justify-content: center;
        font-size: 14px;
        margin-top: 10px;
        flex-wrap: wrap;
        gap: 10px;
    }

    .categories a {
        color: white;
        text-decoration: none;
    }
</style>