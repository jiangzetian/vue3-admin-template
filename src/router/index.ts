// @/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from '@/store';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home/index.vue'),
        meta: {
            title: '首页',
            layout: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/index.vue'),
        meta: {
            title: '登录',
            layout: false,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.name !== 'Login' && !userStore.token) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
