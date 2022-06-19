import Mock from 'mockjs';
import { rootRoutes, adminRoutes, userRoutes, routeConfig } from './data/routes';

export default [
    {
        // http://mockjs.com/examples.html
        url: '/mock/api/login',
        method: 'post',
        timeout: 500,
        // statusCode: 500,
        response: ({ body }) => {
            let role: string;
            let routes: routeConfig[] = [];
            if (body.username === 'root') {
                role = 'Root';
                routes = rootRoutes;
            } else if (body.username === 'admin') {
                role = 'Admin';
                routes = adminRoutes;
            } else {
                role = 'User';
                routes = userRoutes;
            }
            return {
                code: 200,
                success: true,
                message: 'ok',
                data: {
                    token: Mock.Random.string('lower', 200),
                    userInfo: {
                        id: Mock.Random.id(),
                        name: Mock.Random.cname(),
                        email: Mock.Random.email(),
                        gender: Mock.Random.natural(1, 2),
                        age: Mock.Random.natural(18, 30),
                        avatar: Mock.Random.image('800x800'),
                        role,
                    },
                    routes,
                },
            };
        },
    },
];
