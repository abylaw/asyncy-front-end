<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/_all";
@import "../../node_modules/bulma/sass/base/helpers";
@import "../../node_modules/bulma/sass/grid/columns";
@import "../../node_modules/bulma/sass/grid/tiles";
@import "../../node_modules/bulma/sass/components/level";
@import "../../node_modules/bulma/sass/components/media";
@import "../../node_modules/bulma/sass/elements/tag";
@import "../../node_modules/bulma/sass/elements/box";
@import "../../node_modules/bulma/sass/elements/button";
@import "../../node_modules/bulma/sass/elements/form";

@import "../assets/fonts/1804-GFNGYO";

body {
  background: #111;
  margin: 0;
}

.app {
  background: white;
  font-family: Graphik Web, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-size: 1em;
  line-height: 1.6em;
}

a {
  color: #1376E5;
  text-decoration: none;
}

h1 {
  font-size: 2.8em;
  margin-bottom: 0.3em;
}
</style>
