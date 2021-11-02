<template>
    <layout v-if="$route.meta.layout" />
    <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import layout from '@/layout/index.vue';
export default defineComponent({
    name: 'App',
    components: { layout },
});
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
}
</style>
