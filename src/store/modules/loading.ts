import { defineStore } from 'pinia';

const useLoadingStore = defineStore('loading', {
    state: () => {
        return {
            loadingState: false,
        };
    },
    actions: {
        showLoading() {
            this.loadingState = true;
        },
        hideLoading() {
            this.loadingState = false;
        },
    },
});

export default useLoadingStore;
