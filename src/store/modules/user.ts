import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userInfo: {},
        };
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        clearToken() {
            localStorage.removeItem('token');
            this.token = '';
        },
        clearUser() {
            localStorage.removeItem('userInfo');
            this.userInfo = {};
        },
    },
    persist: {
        enabled: true,
        strategies: [
            { key: 'token', storage: localStorage, paths: ['token'] },
            { key: 'userInfo', storage: localStorage, paths: ['userInfo'] },
        ],
    },
});

export default useUserStore;
