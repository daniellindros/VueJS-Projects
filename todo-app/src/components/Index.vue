<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Todo List</h1>
      </div>
    
    </div>
  </section>
  <section class="section">  
    <div class="columns is-desktop">
      <div class="column">
      </div>
      <div class="column is-one-third">
          <App />
      </div>
      <div class="column">
      </div>
    </div>
  </section>
</div>
    
</template>

<script>
import App from '@/components/Todo/App';

export default {
  name: 'Index',
  components: {
    App
  },
  data() {
    return {};
  }
};
</script>

