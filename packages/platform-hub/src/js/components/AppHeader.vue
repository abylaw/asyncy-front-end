<template>
  <nav class="app-header">
    <div class="level">
      <div class="level-left">
        <router-link to="/">
          <img class="logo" src="../../assets/logo.svg"/>
        </router-link>
      </div>
      <div class="level-item">
        <div class="search-bar-container" v-if="hasSearchBar">
          <search-bar></search-bar>
        </div>
      </div>
      <div class="level-item"><a href="/">Explore</a></div>
      <div class="level-item"><a href="https://refresh--asyncy-homepage.netlify.com/platform">Platform</a></div>
      <div class="level-item"><a href="https://docs.asyncy.com">Documentation</a></div>
      <div class="level-right">
        <button class="button">
          Submit a service
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar';

export default {
  name: 'AppHeader',
  props: ['hasSearchBar'],
  components: { SearchBar },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped lang="scss">
.level {
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.search-bar-container {
  width: 100%;
  margin-right: 2em;
  margin-left: 2em;

  /deep/ {
    .input {
      height: 2em;
    }
  }
}

.level-item:not(:last-child) {
  flex-grow: 1;

  a {
    color: white;
  }
}

.app-header {
  background-color: #111;
  padding: 10px;
  height: calc(4em - 20px);

  .logo {
    margin-top: 0.2em;
    height: 1.2em;
  }
}
</style>
