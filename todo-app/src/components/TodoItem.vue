<template>
  <div>
    <input type="checkbox"> {{this.text}}
  </div>
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
