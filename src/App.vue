<template>
    <layout v-if="route.meta.layout" />
    <a-spin :spinning="store.state.loading.loadingState" :delay="300" size="large" v-else>
        <router-view />
    </a-spin>
</template>

<script lang="ts" setup>
import layout from '@/layout/index.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
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
