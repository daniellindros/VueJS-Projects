<template>
  <div>
    <List v-bind:todos="todos" />
  </div>
</template>

<script>
import List from '@/components/Todo/List';
import { mapGetters } from 'vuex';

export default {
  name: 'ListContainer',
  components: {
    List
  },
  computed: {
    ...mapGetters(['todos'])
  },
  data() {
    return {};
  },
};
</script>
