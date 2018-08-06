<template>
<nav class="panel">
  <p class="panel-heading">
    Todo List
  </p>

  <InputAdd />
  <List />
  <Filter @clicked='doMagic'/>

</nav>
</template>

<script>
import InputAdd from '@/components/Todo/InputAdd';
import List from '@/components/Todo/List';
import Filter from '@/components/Todo/Filter';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    InputAdd,
    List,
    Filter
  },
  computed: {
    ...mapGetters(['todos', 'filters'])
  },
  data() {
    return {};
  },
};
</script>