interface routeConfig {
    path: string;
    name: string;
    component?: string;
    redirect?: string;
    meta: {
        title: string;
        layout: boolean;
    };
    children?: routeConfig[];
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
    {
        path: '/menu',
        name: 'menu',
        component: 'views/Menu/index.vue',
        redirect: '/menu/menu1',
        meta: {
            title: '多级菜单页',
            layout: true,
        },
        children: [
            {
                path: 'menu1',
                name: 'menu1',
                component: 'views/Menu/Menu1/index.vue',
                meta: {
                    title: 'Menu1页',
                    layout: true,
                },
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: 'views/Menu/Menu2/index.vue',
                meta: {
                    title: 'Menu2页',
                    layout: true,
                },
            },
        ],
    },
];

const adminRoutes: routeConfig[] = [
    {
        path: '/admin',
        name: 'admin',
        component: 'views/Admin/index.vue',
        meta: {
            title: 'Admin权限页',
            layout: true,
        },
    },
];

const userRoutes: routeConfig[] = [];

export { rootRoutes, adminRoutes, userRoutes, routeConfig };
