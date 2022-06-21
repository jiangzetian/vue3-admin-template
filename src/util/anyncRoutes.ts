// 递归遍历路由数据
const recursiveRoutes = (tree: any[], views) => {
    return tree.map((node) => {
        const tempNode = node;
        if (tempNode.component) {
            tempNode.component = views[`../${tempNode.component}`];
        }
        if (tempNode.children && tempNode.children.length > 0) {
            recursiveRoutes(tempNode.children, views);
        }
        return tempNode;
    });
};

// 添加动态路由
const addRoutes = (userStore, router) => {
    if (userStore.routes && userStore.routes.length > 0) {
        const routesData = JSON.parse(JSON.stringify(userStore.routes));
        const views = import.meta.glob('../views/**/*.vue');
        recursiveRoutes(routesData, views);
        routesData.forEach((item: any) => {
            router.addRoute(item);
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
