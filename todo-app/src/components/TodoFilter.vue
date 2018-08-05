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
const filters = {
  all: t => true,
  completed: t => t.completed,
  incompleted: t => !t.completed
};

export default {
  name: 'TodoFilter',
  data() {
    return {
      activeFilter: 'all'
    };
  },
  methods: {
    addTodo(text) {
      this.todos.push({ text, completed: false });
      this.newTodoText = '';
    },

    setActiveFilter(selectedfilter) {
      this.activeFilter = selectedfilter;
    },

    isActiveFilter(filter) {
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
