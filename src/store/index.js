import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: ''
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        setUser({ commit }) {
            commit('setUser');
        }
    },
    modules: {},
    getters: {
        getUser: state => state.user
    },
    plugins: [createPersistedState()]
})

export default store;