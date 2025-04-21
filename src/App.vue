<script setup lang="ts">
    import first from '@/components/footer/first.vue'
    import second from '@/components/footer/second.vue'
</script>

<template>
    <router-view name="header"></router-view>
    <br>
    <router-view name="main"></router-view>
    <br>
    <footer>
        <first />
        <br />
        <second />
    </footer>

</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: inherit; 
        text-decoration: none; /* 去掉下划线 */
    }

</style>
