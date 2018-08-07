<template>
  <div>
    <Item :key="todo.id" v-for="todo in todos" v-bind="todo" />
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
};
</script>
