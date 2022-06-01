import { defineStore } from 'pinia';

const useLayoutStore = defineStore('layout', {
    state: () => {
        return {
            menuCollapsed: false,
        };
    },
    actions: {
        menuTrigger() {
            this.menuCollapsed = !this.menuCollapsed;
        },
    },
});

export default useLayoutStore;
