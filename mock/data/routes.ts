/*
 * @Author: 蒋泽天 1139246375@qq.com
 * @Date: 2022-06-21 00:21:02
 * @LastEditors: 蒋泽天 1139246375@qq.com
 * @LastEditTime: 2022-06-21 00:21:38
 * @FilePath: \vue3-admin-template\mock\data\routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
            title: 'Admin权限页',
            layout: true,
        },
    },
];

const userRoutes: routeConfig[] = [];

export { rootRoutes, adminRoutes, userRoutes, routeConfig };
