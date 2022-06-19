import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userInfo: {},
            routes: [],
        };
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        setRoutes(routes) {
            this.routes = routes;
        },
        clearToken() {
            this.token = '';
        },
        clearUser() {
            this.userInfo = {};
        },
        clearRoutes() {
            this.routes = [];
        },
    },
    persist: {
        enabled: true,
        strategies: [
            { key: 'token', storage: localStorage, paths: ['token'] },
            { key: 'userInfo', storage: localStorage, paths: ['userInfo'] },
            { key: 'routes', storage: localStorage, paths: ['routes'] },
        ],
    },
});

export default useUserStore;
