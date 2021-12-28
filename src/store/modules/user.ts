const user = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token);
            state.token = token;
        },
        setUserInfo(state, userInfo) {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            state.userInfo = userInfo;
        },
        clearToken(state) {
            localStorage.removeItem('token');
            state.token = '';
        },
        clearUser(state) {
            localStorage.removeItem('userInfo');
            state.userInfo = {};
        },
    },
    actions: {},
};
export default user;
