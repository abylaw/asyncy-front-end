<template>
  <div class="level-left">
    <div class="recently-added-image"></div>
    <div>
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentlyAddedTile',
  props: ['title', 'description'],
};
</script>

<style scoped>
.recently-added-image {
  min-width: 65px;
  height: 65px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 1em;
}

h4 {
  margin-top: 0;
  margin-bottom: 0.3em;
}

p {
  margin: 0;
}
</style>
