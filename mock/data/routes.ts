interface routeConfig {
    path: string;
    name: string;
    component: string;
    meta: {
        title: string;
        layout: boolean;
    };
}

const rootRoutes: routeConfig[] = [
    {
        path: '/root',
        name: 'root',
        component: 'views/Root/index.vue',
        meta: {
            title: 'Root权限页',
            layout: true,
        },
    },
];

const adminRoutes: routeConfig[] = [
    {
        path: '/admin',
        name: 'admin',
        component: 'views/Admin/index.vue',
        meta: {
            title: 'Root权限页',
            layout: true,
        },
    },
];

const userRoutes: routeConfig[] = [];

export { rootRoutes, adminRoutes, userRoutes, routeConfig };
