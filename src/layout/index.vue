<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
                <a-menu-item key="/">
                    <dashboard-outlined />
                    <span>首页</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0 20px">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>

            <a-layout-content style="margin: 24px 16px; padding: 24px; background: #fff; min-height: 280px">
                <a-spin :spinning="store.state.loading.loadingState" :delay="300" size="large">
                    <router-view />
                </a-spin>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import { DashboardOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
let selectedKeys = ref<string[]>(['/']);
let collapsed = ref<boolean>(false);
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
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
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
