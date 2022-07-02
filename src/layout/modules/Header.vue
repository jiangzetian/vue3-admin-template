<template>
    <a-layout-header class="header">
        <div class="left">
            <div class="item" @click="menuTrigger">
                <menu-unfold-outlined v-if="layoutStore.menuCollapsed" class="trigger" />
                <menu-fold-outlined v-else class="trigger" />
            </div>
        </div>
        <div class="right">
            <div class="item">
                <a-dropdown placement="bottom">
                    <div class="user">
                        <a-avatar class="avatar" :src="userStore.userInfo.avatar">登录</a-avatar>
                        <span class="name">{{ userStore.userInfo.name }}</span>
                    </div>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item @click="outLogin">
                                <poweroff-outlined style="margin-right: 5px; color: #f5222d" />
                                <span>退出系统</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </a-layout-header>
</template>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useLayoutStore, useUserStore } from '@/store';

const router = useRouter();
const layoutStore = useLayoutStore();
const userStore = useUserStore();
const menuTrigger = () => {
    layoutStore.menuTrigger();
};
const outLogin = () => {
    router.push('/login');
};
</script>

<style lang="less" scoped>
.header {
    height: 48px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    color: #666;
    font-size: 18px;
    .item {
        cursor: pointer;
        height: 48px;
        display: flex;
        align-items: center;
        margin: 0 10px;
        padding: 0 10px;
        transition: color 0.3s;
        &:hover {
            background: rgba(0, 0, 0, 0.05);
            color: #1890ff;
        }
    }
    .user {
        display: flex;
        align-items: center;
        .avatar {
            margin-right: 10px;
        }
        .name {
            font-size: 14px;
            min-width: 40px;
        }
    }
}
</style>
