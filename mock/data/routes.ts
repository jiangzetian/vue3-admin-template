interface routeConfig {
    path: string;
    name: string;
    component?: string;
    redirect?: string;
    meta: {
        title: string;
        layout: boolean;
        menu: boolean;
        icon: string;
        sort?: number;
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
            menu: true,
            icon: 'KeyOutlined',
            sort: 2,
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
            menu: true,
            icon: 'MenuOutlined',
            sort: 3,
        },
        children: [
            {
                path: 'menu1',
                name: 'menu1',
                component: 'views/Menu/Menu1/index.vue',
                meta: {
                    title: 'Menu1页',
                    layout: true,
                    menu: true,
                    icon: 'MenuOutlined',
                    sort: 1,
                },
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: 'views/Menu/Menu2/index.vue',
                redirect: 'menu2/menu2-1',
                meta: {
                    title: 'Menu2页',
                    layout: true,
                    menu: true,
                    icon: 'MenuOutlined',
                    sort: 2,
                },
                children: [
                    {
                        path: 'menu2-1',
                        name: 'menu2-1',
                        component: 'views/Menu/Menu2/Menu2-1/index.vue',
                        meta: {
                            title: 'Menu2-1页',
                            layout: true,
                            menu: true,
                            icon: 'MenuOutlined',
                            sort: 3,
                        },
                    },
                ],
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
            menu: true,
            icon: 'KeyOutlined',
            sort: 2,
        },
    },
];

const userRoutes: routeConfig[] = [];

export { rootRoutes, adminRoutes, userRoutes, routeConfig };
