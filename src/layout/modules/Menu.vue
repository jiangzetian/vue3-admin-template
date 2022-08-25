<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="routeKey" @select="menuSelect">
        <template v-for="item in routesData">
            <template v-if="item.meta.menu">
                <template v-if="item.children && item.children.length > 0">
                    <sub-menu :routes-sub-data="item" :key="item.name" />
                </template>
                <template v-else>
                    <a-menu-item :key="item.name">
                        <template #icon v-if="item.meta.icon">
                            <Icon :icon="item.meta.icon" />
                        </template>
                        <span>{{ item.meta.title }}</span>
                    </a-menu-item>
                </template>
            </template>
        </template>
    </a-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute, RouteRecordName } from 'vue-router';
import Icon from '@/util/icon';
import SubMenu from './SubMenu.vue';

const route = useRoute();
const router = useRouter();

const routeKey = ref<(RouteRecordName | null | undefined)[]>([]);
const routesData = ref<any[]>([]);

const menuSelect = (item: { key: string }) => {
    router.push({ name: item.key });
};

const setSortRouter = (tree: any[]) => {
    tree.sort((aItem, bItem) => {
        return aItem.meta.sort - bItem.meta.sort;
    });
    return tree.map((node) => {
        const tempNode = node;
        if (tempNode.children && tempNode.children.length > 0) {
            setSortRouter(tempNode.children);
        }
        return tempNode;
    });
};

const getMenu = () => {
    let menuRouters: any[] = router.getRoutes();
    menuRouters = menuRouters.filter((item: any) => {
        return item.meta.menu && item.path.split('/').length === 2;
    });
    setSortRouter(menuRouters);
    routesData.value = menuRouters;
    routeKey.value = [route.name];
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
