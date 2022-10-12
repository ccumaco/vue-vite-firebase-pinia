import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/HomeView.vue";
import Login from "./views/LoginView.vue";
import Register from "./views/RegisterView.vue";
import Profile from "./views/ProfileView.vue";
import { useUserStore } from "./stores/user"


// middleware to require login at views
const requireAuth = async (to, from, next) => {
    const userStore = useUserStore()
    userStore.loadingSession = true
    const user = await userStore.currentUser()
    if (user) {
        next()
    } else {
        next("/login")
    }
    userStore.loadingSession = false
}

const routes = [
    { path: "/", component: Home, beforeEnter: requireAuth},
    { path: "/profile/:id", component: Profile, beforeEnter: requireAuth},
    { path: "/login", component: Login},
    { path: "/register", component: Register},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
