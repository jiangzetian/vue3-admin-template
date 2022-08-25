<template>
    <a-sub-menu :key="routesSubData.name">
        <template #icon v-if="routesSubData.meta.icon">
            <Icon :icon="routesSubData.meta.icon" />
        </template>
        <template #title>{{ routesSubData.meta.title }}</template>
        <template v-for="item in routesSubData.children">
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
    </a-sub-menu>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Icon from '@/util/icon';

defineProps({
    routesSubData: {
        type: Object,
        default: () => {},
    },
});
</script>

<style lang="less" scoped></style>
