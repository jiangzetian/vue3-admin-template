<template>
    <div>
        <a-button @click="outLogin">退出登录</a-button>
        <h1>home</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import homeHook from './moduls/index.ts';

export default defineComponent({
    name: 'home',
    setup() {
        const { outLogin } = homeHook;
        return {
            outLogin,
        };
    },
});
</script>

<style lang="less" scoped></style>
