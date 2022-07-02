<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="layoutStore.menuCollapsed" :trigger="null" collapsible>
            <div class="logo" />
            <Menu />
        </a-layout-sider>
        <a-layout>
            <Header />
            <a-layout-content style="margin: 24px 16px; padding: 24px; background: #fff; min-height: 280px">
                <a-spin :spinning="loadingStore.loadingState" :delay="300" size="large">
                    <router-view />
                </a-spin>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import { useLoadingStore, useLayoutStore } from '@/store';
import Menu from './modules/Menu.vue';
import Header from './modules/Header.vue';

const loadingStore = useLoadingStore();
const layoutStore = useLayoutStore();
</script>

<style lang="less" scoped>
.layout {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.logo {
    margin: 20px auto;
    width: 80%;
    height: 40px;
    background: #334454;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
