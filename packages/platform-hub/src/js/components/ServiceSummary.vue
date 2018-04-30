<template>
  <router-link to="/service">
    <div class="media">
      <div class="media-left">
        <div class="recently-added-image"></div>
      </div>
      <div class="media-content">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <div v-if="tags" class="tag-container">
          <div v-for="t in tags" class="tag">{{ t }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script scoped>
export default {
  name: 'RecentlyAddedTile',
  props: ['title', 'description', 'tags'],
};
</script>

<style scoped>
.recently-added-image {
  min-width: 65px;
  height: 65px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

h4 {
  margin-top: 0;
  margin-bottom: 0.3em;
}

p {
  margin: 0;
}

.tag-container {
  margin-top: 1em;
}

.tag {
  margin-right: 0.4em;
}
</style>
