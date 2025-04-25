<script setup lang="ts">
</script>

<template>
    <router-view name="header"></router-view>
    <br>
    <router-view name="main"></router-view>
    <br>
    <router-view name="footer"></router-view>

</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    header{
        a {
            color: inherit; 
            text-decoration: none; /* 去掉下划线 */
        }
    }

</style>
