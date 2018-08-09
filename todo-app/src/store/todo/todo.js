import { Todo, filters } from '@/helpers/todo'

// Constants
export const GET_TODOS = 'getTodos';
export const ADD_TODO = 'addTodo';
export const REMOVE_TODO = 'removeTodo';
export const TOGGLE_TODO_COMPLETED = 'toggleTodoCompleted';

export const GET_ACTIVE_FILTER = 'activeFilter';
export const CHANGE_FILTER = 'changeFilter';

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

export const todo = {
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
}