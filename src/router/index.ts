import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from '@/store';
import { addRoutes, clerRoutes } from '@/util/anyncRoutes';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            title: '首页',
            layout: true,
            menu: true,
            icon: 'DashboardOutlined',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
            layout: false,
            menu: false,
            icon: 'LoginOutlined',
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

let registerRouteFresh = true;
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
    if (to.name !== 'Login' && !userStore.token) {
        next({ name: 'Login' });
    } else {
        if (to.name === 'Login') {
            userStore.clearToken();
            userStore.clearUser();
            clerRoutes(userStore, router);
        }
        if (!from.name && registerRouteFresh) {
            addRoutes(userStore, router);
            next({ ...to, replace: true });
            registerRouteFresh = false;
        } else {
            next();
        }
    }
});

export default router;
