// @/router/index.ts
import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component:  () => import('../views/Home/index.vue'),
	meta:{
		title:'首页',
	}
  },
  {
    path: "/login",
    name: "Login",
    component:  () => import('../views/Login/index.vue'),
	meta:{
		title:'登录',
	}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;