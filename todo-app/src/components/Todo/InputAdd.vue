<template>
  <div class="panel-block">
    <p class="control">
      <input @keyup.enter="addTodo()" v-model="newTodoText" class="input" type="text" placeholder="What needs to be done?">
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_TODO } from '@/store/actions-type'

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
      this.$store.dispatch(ADD_TODO, this.newTodoText);
      this.newTodoText = '';
    }
  }
};
</script>

<style>
</style>
