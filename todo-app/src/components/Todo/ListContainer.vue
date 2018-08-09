<template>
  <div>
    <List :todos="todos" />
  </div>
</template>

<script>
import List from '@/components/Todo/List';
import { GET_TODOS } from '@/store/todo/todo';
import { mapGetters } from 'vuex';

export default {
  name: 'ListContainer',
  components: {
    List
  },
  computed: {
    ...mapGetters({
      todos: GET_TODOS
    })
  }
};
</script>
