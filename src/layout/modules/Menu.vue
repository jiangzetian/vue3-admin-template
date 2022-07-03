<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="routeKey" @select="menuSelect">
        <template v-for="item in routesData">
            <template v-if="item.meta.menu">
                <template v-if="!item.children">
                    <a-menu-item :key="item.name">
                        <template #icon v-if="item.meta.icon">
                            <Icon :icon="item.meta.icon" />
                        </template>
                        <span>{{ item.meta.title }}</span>
                    </a-menu-item>
                </template>
                <template v-else>
                    <sub-menu :routes-sub-data="item" :key="item.name" />
                </template>
            </template>
        </template>
    </a-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute, RouteRecordName } from 'vue-router';
import { useUserStore } from '@/store';
import Icon from '@/util/icon';
import SubMenu from './SubMenu.vue';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const routeKey = ref<(RouteRecordName | null | undefined)[]>([]);
const routesDefaultData = ref<any[]>([
    {
        path: '/',
        name: 'home',
        component: 'views/Home/index.vue',
        meta: {
            title: '首页',
            layout: true,
            menu: true,
            icon: 'DashboardOutlined',
        },
    },
]);
const routesData = ref<any[]>([]);

const getMenu = () => {
    routesData.value = routesDefaultData.value.concat(userStore.routes);
    routeKey.value = [route.name];
};

const menuSelect = (item) => {
    router.push({ name: item.key });
};

onMounted(() => {
    getMenu();
});

watch(
    () => route.name,
    (val) => {
        if (val) {
            routeKey.value = [route.name];
        }
    }
);
</script>

<style lang="less" scoped></style>
