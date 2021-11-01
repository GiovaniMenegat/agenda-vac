import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
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
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.getUser === '') {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;