<template>
  <nav class="app-header">
    <div class="level">
      <div class="level-left">
        <div>
          <router-link to="/">
            <img src="../../assets/logo.svg"/>
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item"><a href="/">Explore</a></div>
        <div class="level-item"><a href="/">Platform</a></div>
        <div class="level-item"><a href="/">Documentation</a></div>
        <div class="level-item">
          <button class="button">
            Submit a service
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.level {
  max-width: 1100px;
  margin: 0 auto;
}
.app-header {
  background-color: black;
  padding: 25px;
}
</style>
