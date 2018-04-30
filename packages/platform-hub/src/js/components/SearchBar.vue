<template>
  <form @submit.prevent="search">
    <input class="input" type="text" placeholder="Search Hub">
  </form>
</template>

<script>
import ServiceSummary from '../components/ServiceSummary';

export default {
  name: 'SearchResults',
  methods: {
    search() {
      this.$router.push('/search');
    },
  },
  components: {
    ServiceSummary,
  },
};
</script>

<style scoped>
</style>
