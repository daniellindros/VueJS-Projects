<template>
    <a 
      class="panel-block"
      @click="$emit( 'update:completed', !completed  )"
    >
      <span class="icon checkbox">
        <i class="material-icons" aria-hidden="true">{{ completed ? 'check_box' : 'check_box_outline_blank' }}</i>
      </span>
      {{text}}
    </a>    
</template>

<script>
export default {
  name: 'TodoItem',
  data() {
    return {};
  },
  props: {
    text: String,
    completed: Boolean
  }
};
</script>

<style scoped>
.checkbox {
  margin-right: 0.5em;
}
</style>