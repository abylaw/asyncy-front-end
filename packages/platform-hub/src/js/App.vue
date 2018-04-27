<template>
  <div id="app">
    <app-header>
    </app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: { AppHeader },
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/_all";
@import "../../node_modules/bulma/sass/grid/columns";
@import "../../node_modules/bulma/sass/components/level";
@import "../../node_modules/bulma/sass/grid/tiles";

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
