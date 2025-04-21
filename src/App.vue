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
</style>
