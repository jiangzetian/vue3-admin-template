import Fetch from '@/request/http';

const LoginAPI = {
    /**
     * 账号密码登录
     * @param {Object} data
     */
    setLogin(data) {
        return Fetch({
            method: 'POST',
            url: `/api/login`,
            data,
        });
    },
};

export default LoginAPI;
