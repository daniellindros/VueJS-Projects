<template>
  <div class="panel-block">
    <p class="control">
      <input @keyup.enter="addTodo()" v-model="newTodoText" class="input" type="text" placeholder="What needs to be done?">
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'InputAdd',
  data() {
    return {
      newTodoText: ''
    };
  },
  methods: {
    ...mapActions(['addTodo'])
  }
};
</script>

<style>
</style>
