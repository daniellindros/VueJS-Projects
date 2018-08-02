<template>
  <label class="panel-block">
    <input 
      type="checkbox" 
      :checked="completed"
      @input= "$emit( 'update:completed', $event.target.checked  )"
    > 
    {{text}}
  </label>
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
  },
  methods: {
    print() {
      console.log("changed")
    }
  }
};
</script>

<style>
</style>
