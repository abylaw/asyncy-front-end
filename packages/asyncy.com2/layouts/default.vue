<template>
  <div>
    <app-header />
    <nuxt :style="{
      margin: '25px',
    }"/>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss">
/* contains all css global to the asyncy marketing site */
@import "../node_modules/bulma/sass/utilities/_all";
@import "../node_modules/bulma/sass/grid/columns";
@import "../node_modules/bulma/sass/grid/tiles";
@import "../node_modules/bulma/sass/base/helpers";
@import "../node_modules/bulma/sass/components/level";
@import '../assets/fonts/1804-GFNGYO';

body {
  background: #111;
  color: white;
  font-size: 1em;
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  margin: 0;

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.section {
  margin: 45px auto 90px auto;
  max-width: 1200px;
}
/* contains css global to the Asyncy org */

a {
  font-size: 0.95em;
  text-decoration: none;
  color: white;
}

input {
  font-size: 1em;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: rgba(35,35,35,1);
  color: rgba(190,190,190,1);
  transition: all 0.2s ease-in-out;
  outline: none;
}

input:focus {
  border-color: #515CF9;
  filter: brightness(120%);
  color: white;
}

input:invalid {
  border-color: #F74545;
  color: #F74545;
}

h1  {
  font-size: 2.5em;
  margin-bottom: 0.20em;
  font-weight: 400;
  margin-top: 0.4em;
}

h2  {
  font-size: 2em;
  font-weight:300;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  font-weight: 400;
}

h3  {
  font-size: 2em;
  font-weight:300;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  font-weight: 400;
}

h4 {
  font-size: 1.2em;
  font-weight:300;
  margin-bottom: 0.7em;
  margin-top: 0.2em;
  font-weight: 400;
}

h5 {
  font-size: 1em;
  font-weight:300;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  font-weight: 400;
}

p {
  font-size:1.05em;
  line-height:1.9em;
}

.subtitle {
  font-size: 1.15em;
  color: #B7B8C1;
}

button {
  font-size: 0.95em;
  color: white;
  border: none;
  padding: 15px 28px;
  border-radius: 6px;
}

button.primary {
  color:white;
  background-color: #515CF9;
  text-align: center;
  font-weight: 600;

}

button.secondary {
  color:black;
  background-color:white;
  text-align: center;
  font-weight: 600;
}
</style>
