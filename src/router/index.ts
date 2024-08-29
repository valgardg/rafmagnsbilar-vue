import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../screens/HomeScreen.vue";
import AboutScreen from "../screens/AboutScreen.vue";

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
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutScreen
        }
    ]
})

export default router