<template>
  <div class="index">
    <app-header></app-header>
    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>
          <p class="has-text-weight-bold">Topics</p>
          <ul>
            <li>Marketing (42)</li>
            <li>Stories (19)</li>
            <li>Apps (16)</li>
            <li>Other (12)</li>
          </ul>

          <p class="has-text-weight-bold">Languages</p>
          <ul>
            <li>Java (42)</li>
            <li>Javascript (19)</li>
            <li>PHP (12)</li>
          </ul>

        </div>
      </div>
      <div class="column is-8 main-container">
        <div class="search-bar-container">
          <search-bar/>
          <p class="help-text">Try topic:social or topic:machine-learning</p>
        </div>

        <div class="level is-mobile service-result-title-container">
          <div class="level-left"><h2 class="is-marginless">23 service results</h2></div>
          <div class="level-right">
            <div class="select is-small">
              <select>
                <option selected>Sort</option>
                <option>Date</option>
                <option>Name</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
              <div v-for="r in results" class="tile is-child search-result">
                <service-summary :title="r.title" :description="r.description" :tags="r.tags"></service-summary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSummary from '../components/ServiceSummary';
import SearchBar from '../components/SearchBar';

export default {
  name: 'SearchResults',
  data() {
    return {
      results: [
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
          tags: ['Label'],
        },
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
          tags: ['Label', 'Label2'],
        },
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
        },
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
        },
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
        },
        {
          title: 'Title',
          description: 'Proin maximus ut lectus vel pellentesque. Morbi magna metus, eleifend quis nulla id, pretium sollicitudin velit. Vivamus eget venenatis neque. Morbi vel felis consequat, mollis ipsum ac, dignissim arcu. Sed rhoncus diam sed mi sodales.',
        },
      ],
    };
  },
  components: {
    ServiceSummary,
    SearchBar,
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-weight: normal;
  font-size: 1.8em;
  line-height: 1.8em;
  margin-top: 1em;
}

ul {
  list-style: none;
  padding-left: 0;
}

.main-container {
  margin-bottom: 2em;
}

.sidebar {
  ul {
    line-height: 2em;
  }
}

.columns {
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.search-bar-container {
  margin-top: 1.5em;
}

.service-result-title-container {
  margin-bottom: 0.8em;
}

.help-text {
  color: #727272;
}

.search-result {
  padding-top: 1.5em;
  border-top: 1px solid #C7C7C7;
}
</style>
