// 添加动态路由
const addRoutes = (userStore, router) => {
    if (userStore.routes && userStore.routes.length > 0) {
        const views = import.meta.glob('../views/**/*.vue');
        let tempItem: any = {};
        userStore.routes.forEach((item: any) => {
            tempItem = JSON.parse(JSON.stringify(item));
            tempItem.component = views[`../${item.component}`];
            router.addRoute(tempItem);
        });
    }
    router.addRoute({
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '无法找到该页面',
            layout: false,
        },
    });
};

// 清除动态路由
const clerRoutes = (userStore, router) => {
    if (userStore.routes && userStore.routes.length > 0) {
        userStore.routes.forEach((item: any) => {
            router.removeRoute(item.name);
        });
        userStore.clearRoutes();
    }
};

export { addRoutes, clerRoutes };
