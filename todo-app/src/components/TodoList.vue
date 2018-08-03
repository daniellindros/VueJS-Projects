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
  
  <TodoItem :key="todo.id" v-for="todo in todos" v-show="isFiltered(todo)" v-bind.sync="todo" />

  <p class="panel-tabs">
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('all') }" 
      @click="setActiveFilter('all')">All</a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('incompleted') }"
      @click="setActiveFilter('incompleted')">Incompleted
    </a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('completed') }"
      @click="setActiveFilter('completed')">Completed
    </a>
  </p>
</nav>
</template>

<script>
import TodoItem from '@/components/TodoItem';
const filters = {
    all: t => true,
    completed: t => t.completed,
    incompleted: t => !t.completed,
  }

export default {
  name: 'TodoList',
  
  components: {
    TodoItem
  },
  
  data: function() {
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
      activeFilter: 'all',    
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({text, completed: false})
      this.newTodoText = '';
    },
    
    setActiveFilter(filter) {
      this.activeFilter = filter
    },
    
    isActiveFilter(filter) {
      return this.activeFilter === filter;
    },
    
    isFiltered(todo) {
      console.log(this.activeFilter)
      return filters[this.activeFilter](todo)
    },
  },
};
</script>

<style>
</style>
