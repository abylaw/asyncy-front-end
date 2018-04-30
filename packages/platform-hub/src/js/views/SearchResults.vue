<template>
  <div class="index">
    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>

          <p>Topics</p>
          <ul>
            <li>Marketing (42)</li>
            <li>Stories (19)</li>
            <li>Apps (16)</li>
            <li>Other (12)</li>
          </ul>

          <p>Languages</p>
          <ul>
            <li>Java (42)</li>
            <li>Javascript (19)</li>
            <li>PHP (12)</li>
          </ul>

        </div>
      </div>
      <div class="column is-7">
        <div>
          <search-bar/>
          <p>Try topic:social or topic:machine-learning</p>
        </div>

        <div class="level is-mobile">
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style: none;
  padding-left: 0;
}

.columns {
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.search-result {
  padding-top: 1.5em;
  border-top: 1px solid #C7C7C7;
}
</style>
