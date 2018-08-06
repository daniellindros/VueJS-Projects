<template>
    <a class="panel-block" @click="toggleCompleted(id)">
      <span class="icon checkbox">
        <i class="material-icons" aria-hidden="true">{{ completed ? 'check_box' : 'check_box_outline_blank' }}</i>
      </span>
      {{text}}
    </a>    
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions(['toggleCompleted'])
  }
};
</script>

<style scoped>
.checkbox {
  margin-right: 0.5em;
}
</style>