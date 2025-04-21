<script setup lang="ts">
    import mainone from '@/components/main/main-one.vue'
    import headerall from '@/components/header/header-all.vue'
    import first from '@/components/footer/first.vue'
    import second from '@/components/footer/second.vue'
</script>

<template>
    <!--<router-view name="header"></router-view>-->
    <headerall/>
    <br>
    <!--<router-view name="main"></router-view>-->
    <mainone/>
    <br>
    <footer>
        <first />
        <br />
        <second :down="down" />
    </footer>

</template>

<style>
</style>
