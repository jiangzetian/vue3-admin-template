import Mock from 'mockjs';

export default [
    {
        // http://mockjs.com/examples.html
        url: '/mock/api/login',
        method: 'post',
        timeout: 500,
        // statusCode: 500,
        response: ({ body }) => {
            return {
                code: 200,
                success: true,
                message: 'ok',
                data: {
                    // query: body,
                    token: Mock.Random.string('lower', 200),
                    userInfo: {
                        id: Mock.Random.id(),
                        name: Mock.Random.cname(),
                        email: Mock.Random.email(),
                        gender: Mock.Random.natural(1, 2),
                        age: Mock.Random.natural(18, 30),
                        avatar: Mock.Random.image('800x800'),
                    },
                },
            };
        },
    },
];
