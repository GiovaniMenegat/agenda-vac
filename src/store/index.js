import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: '',
        appointments: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        addAppointment(state, payload) {
            state.appointments.push(payload);
        },
    },
    actions: {
        setUser({ commit }, payload) {
            commit('setUser', payload);
        },
        addAppointment({ commit }, payload) {
            commit('addAppointment', payload);
        },
    },
    modules: {},
    getters: {
        getUser: state => state.user,
        getAppointments: state => state.appointments
    },
    plugins: [createPersistedState()]
})

export default store;