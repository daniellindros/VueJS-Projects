<template>
    <a class="panel-block" @click="toggleCompleted()">
      <span class="icon checkbox">
        <i class="material-icons" aria-hidden="true">{{ completed ? 'check_box' : 'check_box_outline_blank' }}</i>
      </span>
      {{text}}
    </a>    
</template>

<script>
import { mapActions } from 'vuex';
import { TOGGLE_TODO_COMPLETED } from '@/store/todo/todo';

export default {
  name: 'Item',
  data() {
    return {};
  },
  props: {
    id: String,
    text: String,
    completed: Boolean
  },
  methods: {
    ...mapActions([TOGGLE_TODO_COMPLETED]),
    toggleCompleted() {
      this.$store.dispatch(TOGGLE_TODO_COMPLETED, this.id);
    }
  }
};
</script>

<style scoped>
.checkbox {
  margin-right: 0.5em;
}
</style>