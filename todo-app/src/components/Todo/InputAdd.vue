<template>
  <div class="panel-block">
    <p class="control">
      <input @keyup.enter="addTodo()" v-model="newTodoText" class="input" type="text" placeholder="What needs to be done?">
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Todo } from '@/helpers/todo';
import { ADD_TODO } from '@/store/modules/todo';

export default {
  name: 'InputAdd',
  data() {
    return {
      newTodoText: ''
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodo() {
      if (!this.newTodoText) {
        return;
      }
      const todo = new Todo(this.newTodoText, false);
      this.$store.dispatch(ADD_TODO, todo);
      this.newTodoText = '';
    }
  }
};
</script>

<style>
</style>
