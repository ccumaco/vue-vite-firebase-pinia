import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/HomeView.vue";
import Login from "./views/LoginView.vue";
import Register from "./views/RegisterView.vue";

const routes = [
    { path: "/", component: Home},
    { path: "/login", component: Login},
    { path: "/register", component: Register},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
