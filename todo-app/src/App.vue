<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Index from '@/components/Index';
import TodoItem from '@/components/TodoItem';
export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Index,
    TodoItem
  }
};
</script>

<style>
</style>
