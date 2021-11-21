import axios from 'axios'
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
        fetchAppointments(state, payload) {
            state.appointments = payload;
        },
        addAppointment(state, payload) {
            state.appointments.push(payload);
        },
        editAppointment(state, payload) {
            const index = state.appointments.findIndex(appointment => appointment.id === payload.id);
            
            if (index !== -1) {
                state.appointments.splice(index, 1, payload);
            }
        },
        deleteAppointment(state, payload) {
            state.appointments = state.appointments.filter((appointment) => appointment.id !== payload)
        },
    },
    actions: {
        setUser({ commit }, payload) {
            commit('setUser', payload);
        },
        fetchAppointments({ commit }) {
            axios.get('https://api-agendamento.herokuapp.com/agenda')
            .then(({data}) => {
                commit('fetchAppointments', data);
            })
            .catch(err => {
                console.log(err);
            })
        },

        addAppointment({ commit }, payload) {
            const body = {
                ...payload,
                usuario: {
                    "id": 1
                }
            }
            axios.post('https://api-agendamento.herokuapp.com/agenda', body)
            .then(({data}) => {
                console.log(data);
                commit('addAppointment', data);
            })
            .catch(err => {
                console.log(err);
            })
            
        },

        editAppointment({ commit }, payload) {
            const body = {
                dataAgendamento: payload.dataAgendamento,
                posto: payload.posto,
                dose: payload.dose,
                usuario: {
                    "id": 1
                }
            }
            axios.put(`https://api-agendamento.herokuapp.com/agenda/${payload.id}`, body)
            .then(({ data }) => {
                console.log(data);
                commit('editAppointment', data);
            })
            .catch(err => {
                console.log(err);
            })
        },

        deleteAppointment({ commit }, payload) {
            axios.delete(`https://api-agendamento.herokuapp.com/agenda/${payload}`)
            .then(() => {
                commit('deleteAppointment', payload);
            })
            .catch(err => {
                console.log(err);
            })
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