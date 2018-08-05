<template>
<nav class="panel">
  <p class="panel-heading">
    Todo List
  </p>
  
  <TodoAdd />
  <TodoList />
  <TodoFilter />

</nav>
</template>

<script>
import TodoAdd from '@/components/TodoAdd';
import TodoList from '@/components/TodoList';
import TodoFilter from '@/components/TodoFilter';

export default {
  name: 'TodoApp',
  components: {
    TodoAdd,
    TodoList,
    TodoFilter
  },
  data() {
    return {};
  }
};
</script>