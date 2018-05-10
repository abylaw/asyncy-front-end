<template>
  <form @submit.prevent="search">
    <input class="input" type="text" placeholder="Search Hub" v-model="searchInput">
  </form>
</template>

<script>
import ServiceSummary from '../components/ServiceSummary';

export default {
  name: 'SearchResults',
  props: ['value'],
  methods: {
    search() {
      this.$router.push(`/search?q=${this.searchInput}`);
    },
  },
  data() {
    return {
      searchInput: this.value || '',
    };
  },
  components: {
    ServiceSummary,
  },
};
</script>

<style scoped>
</style>
