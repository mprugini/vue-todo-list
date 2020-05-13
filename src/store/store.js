import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        newTask: '',
        activeTasks: [],
        completedTasks: []
    },
    getters: {
        newTask: state => {
            return state.newTask
        },
        activeTasks: state => {
            return state.activeTasks
        },
        completedTasks: state => {
            return state.completedTasks
        }
    },
    mutations: {
        addTask: (state) => {
            if (state.newTask === '') {
                alert('Cant add empty task!')
            } else {
                state.activeTasks.push(state.newTask)
                state.newTask = ''
                console.log(state.activeTasks)
            }
        },
        updateTask: (state, payload) => {
            state.newTask = payload
        },
        completeTask: (state, payload) => {
            state.completedTasks.push(state.activeTasks[payload])
            state.activeTasks.splice(payload, 1)
            console.log(state.completedTasks)
        },
        deleteTask: (state, payload) => {
            state.activeTasks.splice(payload, 1)
        }
    },
    actions: {
        addTask: ({commit}) => {
            commit('addTask')
        },
        updateTask: ({commit}, payload) => {
            commit('updateTask', payload)
        },
        completeTask: ({commit}, payload) => {
            commit('completeTask', payload)
        },
        deleteTask: ({commit}, payload) => {
            commit('deleteTask', payload)
        }
    }
})