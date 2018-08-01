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
  <label :key="todo.id" v-for="todo in todos" class="panel-block">
    <TodoItem 
      :text="todo.text" 
      :completed="todo.completed" 
    />
  </label>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Incompleted</a>
    <a>Completed</a>
  </p>
</nav>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  methods: {
    addTodo(text) {
      this.todos.push({text, completed: false})
      this.newTodoText = '';
    }
  },
  components: {
    TodoItem
  },
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
      }
      ]
    };
  }
};
</script>

<style>
</style>
