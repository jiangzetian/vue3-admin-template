import { createStore } from 'vuex';
import loading from '@/store/modules/loading';
import user from '@/store/modules/user';

export default createStore({
    state: {},
    mutations: {},
    actions: {},

    modules: {
        loading,
        user,
    },
});
