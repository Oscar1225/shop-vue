<template>
    <header>
        <headertop/>
        <headermainnav/>
        <headercategories/>
    </header>
</template>
<script setup lang="ts">
    import headertop from '@/components/header/header-top.vue'
    import headermainnav from '@/components/header/header-main-nav.vue'
    import headercategories from '@/components/header/header-categories.vue'
</script>
<style scoped>
    header{
        background: linear-gradient(to right, #FF5722, #FF7043);
        color: white;
        padding: 10px 20px;
    }
</style>