const loading = {
    namespaced: true,
    state: {
        loadingState: false,
    },
    getters: {},
    mutations: {
        showLoading(state) {
            state.loadingState = true;
        },
        hideLoading(state) {
            state.loadingState = false;
        },
    },
    actions: {},
};
export default loading;
