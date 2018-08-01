<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Index from '@/components/Index';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Index
  }
};
</script>

<style>
</style>
