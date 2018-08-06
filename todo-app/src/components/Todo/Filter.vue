<template>
  <p class="panel-tabs">
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('all') }" 
      @click="setActiveFilter('all')">All</a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('incompleted') }"
      @click="setActiveFilter('incompleted')">Incompleted
    </a>
    <a 
      v-bind:class="{ 'is-active': isActiveFilter('completed') }"
      @click="setActiveFilter('completed')">Completed
    </a>
  </p>
</template>

<script>
export default {
  name: 'Filter',
  data() {
    return {
      activeFilter: 'all'
    };
  },
  methods: {
    setActiveFilter(selectedfilter) {
      this.$emit('filter-changed', selectedfilter)
      this.activeFilter = selectedfilter;
    },
    isActiveFilter(filter) {
      this.$emit('clicked', 9, 'data')
      return this.activeFilter === filter;
    },
    isFiltered(todo) {
      console.log(this.activeFilter);
      return filters[this.activeFilter](todo);
    }
  }
};
</script>

<style>
</style>
