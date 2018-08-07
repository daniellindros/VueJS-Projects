import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED }
   from '@/store/actions-type';

Vue.use(Vuex);

const defaultState = {
  filters: {
    all: 'all',
    completed: 'completed',
    incompleted: 'incompleted'
  },
  todos: [
    {
      id: uuidv4(),
      text: 'Buy milk',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'Water the plants',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'Launch the missles!',
      completed: true
    },
    {
      id: uuidv4(),
      text: 'Solve world hunger (tell no one)',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'Do the washing up',
      completed: true
    }
  ]
};

export const store = new Vuex.Store({
  state: defaultState,
  getters: {
    todos: state => state.todos,
    filters: state => state.filters
  },
  mutations: {
    [ADD_TODO](state, payload) {
      state.todos.push({
        id: uuidv4(),
        text: payload,
        completed: false
      });
    },
    [REMOVE_TODO](state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    [TOGGLE_TODO_COMPLETED](state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload);
      state.todos[index].completed = !state.todos[index].completed 
    }      
  },
  actions: {
    [ADD_TODO]({ commit }, payload) {
      commit(ADD_TODO, payload);
    },
    [REMOVE_TODO]({ commit }, payload) {
      commit(REMOVE_TODO, payload);
    },
    [TOGGLE_TODO_COMPLETED]({ commit }, payload) {
      commit(TOGGLE_TODO_COMPLETED, payload);
    }
  }
});
