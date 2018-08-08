<template>
  <p class="panel-tabs">
    <a 
      v-bind:class="{ 'is-active': isActiveFilter(filters.ALL) }" 
      @click="changeFilter(filters.ALL)">All</a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter(filters.INCOMPLETED) }"
      @click="changeFilter(filters.INCOMPLETED)">Incompleted
    </a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter(filters.COMPLETED) }"
      @click="changeFilter(filters.COMPLETED)">Completed
    </a>
  </p>
</template>

<script>
import { CHANGE_FILTER } from '@/store/actions.constants';
import { GET_ACTIVE_FILTER } from '@/store/getters.constants';
import { filters } from '@/helpers/todo';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Filters',
  data() {
    return {
      filters
    };
  },
  computed: {
    ...mapGetters([GET_ACTIVE_FILTER])
  },
  methods: {
    ...mapActions([CHANGE_FILTER]),
    changeFilter(filter) {
      this.$store.dispatch(CHANGE_FILTER, filter);
    },
    isActiveFilter(filter) {
      return this.activeFilter === filter;
    }
  }
};
</script>

<style>
</style>
