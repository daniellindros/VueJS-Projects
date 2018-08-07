<template>
  <div>
    <List :todos="todos" />
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
  }
};
</script>
