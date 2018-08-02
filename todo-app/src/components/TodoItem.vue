<template>
  <label class="panel-block">
    <input type="checkbox" v-model="completed"> {{text}}    
  </label>
</template>

<script>
export default {
  name: 'TodoItem',
  data() {
    return {};
  },
  props: { text: String, completed: Boolean }
};
</script>

<style>
</style>
