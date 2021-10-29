import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    next();
})

export default router;