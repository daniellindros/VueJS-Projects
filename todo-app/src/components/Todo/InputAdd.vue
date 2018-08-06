<template>
  <div class="panel-block">
    <p class="control">
      <input @keyup.enter="addTodo(newTodoText)" v-model="newTodoText" class="input" type="text" placeholder="What needs to be done?">
    </p>
  </div>
</template>

<script>
export default {
  name: 'InputAdd',
  data() {
    return {
      newTodoText: ''
    };
  }
};
</script>

<style>
</style>
