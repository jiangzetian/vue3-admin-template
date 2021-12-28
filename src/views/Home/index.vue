<template>
    <div>
        <h1>home</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'home',
    setup() {
        const store = useStore();
        // console.log(store.state.user.token);
        // console.log(toRaw(store.state.user.userInfo));
        return {};
    },
});
</script>

<style lang="less" scoped></style>
