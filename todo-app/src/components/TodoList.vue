<template>
  <div>
    <TodoItem :key="todo.id" v-for="todo in todos" v-bind.sync="todo" />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      todos: this.$store.getters.todos
    };
  }
};
</script>
