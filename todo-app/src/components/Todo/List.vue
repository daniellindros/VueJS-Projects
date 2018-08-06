<template>
  <div>
    <Item :key="todo.id" v-for="todo in todos" />
  </div>
</template>

<script>
import Item from '@/components/Todo/Item';
import { mapGetters } from 'vuex';

export default {
  name: 'List',
  components: {
    Item
  },
  props: ['todos'],
  data() {
    return {};
  },
};
</script>
