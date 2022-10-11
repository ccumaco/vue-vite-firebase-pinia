import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/HomeView.vue";
import Login from "./views/LoginView.vue";
import Register from "./views/RegisterView.vue";
import { useUserStore } from "./stores/user"



const requireAuth = async (to, from, next) => {
    const userStore = useUserStore()
    const user = await userStore.currentUser()
    if (user) {
        next()
    } else {
        next("/login")
    }
}

const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth},
    { path: "/login", component: Login},
    { path: "/register", component: Register},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
