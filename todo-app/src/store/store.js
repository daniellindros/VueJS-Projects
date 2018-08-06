import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const defaultState = {
  todoFilters: {
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
    toggleCompleted: (state, payload) => {
      state.todos.find(todo => todo.id === payload.todo.id).completed
        ? true
        : false;
    },
    addTodo: (state, payload) => {
      state.todos.push(payload.todo);
    },
    removeTodo: (state, payload) => {
      state.todos.filter(todo => todo.id !== payload.todo.id);
    }
  },
  actions: {
    toggleCompleted: ({ commit }, payload) => {
      commit('toggleCompleted', payload);
    },
    addTodo: ({ commit }, payload) => {
      commit('addTodo', payload);
    },
    removeTodo: ({ commit }, payload) => {
      commit('removeTodo', payload);
    }
  }
});
