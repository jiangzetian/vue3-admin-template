import Mock from 'mockjs';

export default [
    {
        // http://mockjs.com/examples.html
        url: '/mock/api/login',
        method: 'post',
        // timeout: 500,
        // statusCode: 500,
        response: ({ body }) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    // query: body,
                    token: Mock.Random.string('lower', 200),
                },
            };
        },
    },
];
