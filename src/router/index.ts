import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
