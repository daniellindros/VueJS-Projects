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
    todos: state => completed => {
      if (completed === undefined) {
        return state.todos;
      }
      else {
        return state.todos.find(todo => todo.completed === completed);
      }
    },
    filters: state => state.filters,
    filteredTodos: state => state.todos.filter(filterObj => {
      todo.completed
    })
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
    }
  }
});
