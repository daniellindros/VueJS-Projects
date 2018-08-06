<template>
<nav class="panel">
  <p class="panel-heading">
    Todo List
  </p>

  <InputAdd />
  <ListContainer />
  <!-- <Filters /> -->
</nav>
</template>

<script>
import InputAdd from '@/components/Todo/InputAdd';
import ListContainer from '@/containers/Todo/ListContainer';
import Filters from '@/components/Todo/Filters';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    InputAdd,
    ListContainer,
    Filters
  },
  computed: {
    ...mapGetters(['todos', 'filters'])
  }
};
</script>