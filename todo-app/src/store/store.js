import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { filters, Todo } from '@/helpers/todo'
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO_COMPLETED,
    CHANGE_FILTER
} from '@/store/actions.constants';
import {
    GET_TODOS,
    GET_ACTIVE_FILTER
} from '@/store/getters.constants'


Vue.use(Vuex);

const defaultState = {
    todos: [
        new Todo('Buy milk'),
        new Todo('Water the plants'),
        new Todo('Fire the laser!!', true),
        new Todo('Solve world hunger (tell no one)'),
        new Todo('Do the washing up', true),
    ],
    activeFilter: filters.ALL
};

export const store = new Vuex.Store({
    state: defaultState,
    getters: {
        [GET_TODOS]: (state) => {
            switch (state.activeFilter) {
                case filters.ALL:
                    return state.todos;
                case filters.COMPLETED:
                    return state.todos.filter(todo => todo.completed)
                case filters.INCOMPLETED:
                    return state.todos.filter(todo => !todo.completed)
            }
        },
        todos: (state) => {
            switch (state.activeFilter) {
                case filters.ALL:
                    return state.todos;
                case filters.COMPLETED:
                    return state.todos.filter(todo => todo.completed)
                case filters.INCOMPLETED:
                    return state.todos.filter(todo => !todo.completed)
            }
        },
        [GET_ACTIVE_FILTER]: (state) => {
            return state.activeFilter;
        }
    },
    mutations: {
        [ADD_TODO](state, todo) {
            state.todos.push(todo);
        },
        [REMOVE_TODO](state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        [TOGGLE_TODO_COMPLETED](state, id) {
            const index = state.todos.findIndex(todo => todo.id === id);
            state.todos[index].completed = !state.todos[index].completed
        },
        [CHANGE_FILTER](state, filter) {
            state.activeFilter = filter;
        }

    },
    actions: {
        [ADD_TODO]({ commit }, todo) {
            commit(ADD_TODO, todo);
        },
        [REMOVE_TODO]({ commit }, id) {
            commit(REMOVE_TODO, id);
        },
        [TOGGLE_TODO_COMPLETED]({ commit }, id) {
            commit(TOGGLE_TODO_COMPLETED, id);
        },
        [CHANGE_FILTER]({ commit }, filter) {
            commit(CHANGE_FILTER, filter);
        }
    }
});
