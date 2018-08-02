<template>
<nav class="panel">
  <p class="panel-heading">
    Todo List
  </p>
  <div class="panel-block">
    <p class="control">
      <input @keyup.enter="addTodo(newTodoText)" v-model="newTodoText" class="input" type="text" placeholder="What needs to be done?">
    </p>
  </div>
  
  <TodoItem :key="todo.id" v-for="todo in activeFilter()" v-bind="todo" />

  <p class="panel-tabs">
    <a 
      v-bind:class="{ 'is-active': activeFilter === filteredAllTodos }" 
      @click="activeFilter=filteredAllTodos">All</a>
    <a 
      v-bind:class="{ 'is-active': activeFilter === filteredIncompletedTodos }"
      @click="activeFilter=filteredIncompletedTodos">Incompleted
    </a>
    <a 
      v-bind:class="{ 'is-active': activeFilter === filterCompletedTodos }"
      @click="activeFilter=filterCompletedTodos">Completed
    </a>
  </p>
</nav>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  data() {
    return {
      newTodoText: '',
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
      ],
      activeFilter: this.filteredAllTodos
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({text, completed: false})
      this.newTodoText = '';
    },
    filteredAllTodos() { 
      return this.todos; 
    },
    filterCompletedTodos() {
      return this.todos.filter(todo => todo.completed)
    },
    filteredIncompletedTodos() {  
      return this.todos.filter(todo => !todo.completed)
    },
  },
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
