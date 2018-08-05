import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = {
  todos: [
    {
      text: 'Buy milk',
      completed: false
    },
    {
      text: 'Water the plants',
      completed: false
    },
    {
      text: 'Launch the missles!',
      completed: true
    },
    {
      text: 'Solve world hunger (tell no one)',
      completed: false
    },
    {
      text: 'Do the washing up',
      completed: true
    }
  ]
};

export const store = new Vuex.Store({
  state: defaultState,
  getters: {
    todos: state => {
      return state.todos;
    }
  }
});
