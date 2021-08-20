import { createStore } from 'vuex';

export default createStore({
    state: {
        test: '123',
    },
    mutations: {
        getStateTest(state) {
            state.test = '456';
            return state.test;
        },
    },
    actions: {},
    modules: {},
});
