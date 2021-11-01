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
        editAppointment(state, payload) {
            for (let i = 0; i < state.appointments.length; i++) {
                if (i === payload.id) {
                    state.appointments[i] = payload;
                }
            }
        },
        deleteAppointment(state, payload) {
            state.appointments.splice(payload, 1);
        },
    },
    actions: {
        setUser({ commit }, payload) {
            commit('setUser', payload);
        },
        addAppointment({ commit }, payload) {
            commit('addAppointment', payload);
        },
        editAppointment({ commit }, payload) {
            commit('editAppointment', payload);
        },
        deleteAppointment({ commit }, payload) {
            commit('deleteAppointment', payload);
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