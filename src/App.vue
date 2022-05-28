<template>
    <layout v-if="route.meta.layout" />
    <a-spin :spinning="loadingStore.loadingState" :delay="300" size="large" v-else>
        <router-view />
    </a-spin>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useLoadingStore } from '@/store';
import layout from '@/layout/index.vue';

const route = useRoute();
const loadingStore = useLoadingStore();
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
}
.ant-spin-nested-loading,
.ant-spin-container {
    width: 100%;
    height: 100%;
}
.ant-spin {
    max-height: unset !important;
}
</style>
