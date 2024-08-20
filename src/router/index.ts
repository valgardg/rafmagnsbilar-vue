import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../screens/HomeScreen.vue";

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeScreen
        }
    ]
})

export default router