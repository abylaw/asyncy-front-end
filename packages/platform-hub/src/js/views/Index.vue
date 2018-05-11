<template>
  <div class="index">
    <app-header></app-header>
    <div class="hero">
      <h1>Asyncy Hub</h1>
      <p class="subtitle">Service discovery and marketplace for Asyncy</p>
      <div class="search-bar-container">
        <div class="field">
          <div class="control">
            <search-bar/>
          </div>
        </div>
      </div>
      <p class="help-message">Try topic:social, topic:machine-learning or stars:>100</p>
    </div>

    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>

          <p class="has-text-weight-bold">Topics</p>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li>List 4</li>
            <li>List 5</li>
            <li>List 6</li>
            <li>List 7</li>
          </ul>

          <p class="has-text-weight-bold">Filters</p>
          <ul>
            <li><label class="checkbox">
              <input type="checkbox">
              Item 1
              </label>
            </li>
            <li><label class="checkbox">
              <input type="checkbox">
              Item 2
              </label>
            </li>
            <li><label class="checkbox">
              <input type="checkbox">
              Item 3
              </label>
            </li>
          </ul>

        </div>
      </div>
      <div class="column">
        <section class="section">
          <h2>Featured services</h2>
          <div class="featured-services">
            <div class="tile is-ancestor">
              <div class="tile is-parent" v-for="f in data.featuredServices">
                <router-link :to="`/service/${f.alias}`">
                  <div class="image-placeholder tile is-child"></div>
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Recently added</h2>
          <div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                <div v-for="r in data.recentServices.slice(0, 3)" class="tile is-child">
                  <service-summary :title="r.alias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus." :tags="r.topics"></service-summary>
                </div>
              </div>
              <div class="tile is-parent is-vertical">
                <div v-for="r in data.recentServices.slice(3, 6)" class="tile is-child">
                  <service-summary :title="r.alias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus." :tags="r.topics"></service-summary>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Stories</h2>
          <div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                <div v-for="s in stories.slice(0, 2)" class="tile is-child">
                  <div>
                    <div class="image-placeholder"></div>
                    <h4>{{ s.title }}</h4>
                    <p>{{ s.description }}</p>
                  </div>
                </div>
              </div>
              <div class="tile is-vertical is-1"/>
              <div class="tile is-parent is-vertical">
                <div v-for="s in stories.slice(2, 4)" class="tile is-child">
                  <div>
                    <div class="image-placeholder"></div>
                    <h4>{{ s.title }}</h4>
                    <p>{{ s.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section getting-started">
          <h2>List your service on Asyncy Hub</h2>
          <button class="button is-light">Get Started</button>
        </section>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import queries from '../utils/graphql';
import ServiceSummary from '../components/ServiceSummary';
import SearchBar from '../components/SearchBar';

export default {
  name: 'index',
  apollo: {
    data: {
      query: queries.INDEX_QUERY,
      update(data) {
        return {
          featuredServices: data.featuredServices.allServices.edges.map(e => e.node),
          recentServices: data.recentServices.allServices.edges.map(e => e.node),
        };
      },
    },
  },
  data() {
    return {
      data: {
        featuredServices: [],
        recentServices: [],
      },
      stories: [
        {
          title: 'Title',
          description: 'Duis in erat eget nisl aliquet sagittis. Cras non quam erat. Proin porttitor, mauris eget finibus semper, tellus turpis fringilla.',
        },
        {
          title: 'Title',
          description: 'Duis in erat eget nisl aliquet sagittis. Cras non quam erat. Proin porttitor, mauris eget finibus semper, tellus turpis fringilla.',
        },
        {
          title: 'Title',
          description: 'Duis in erat eget nisl aliquet sagittis. Cras non quam erat. Proin porttitor, mauris eget finibus semper, tellus turpis fringilla.',
        },
        {
          title: 'Title',
          description: 'Duis in erat eget nisl aliquet sagittis. Cras non quam erat. Proin porttitor, mauris eget finibus semper, tellus turpis fringilla.',
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

.subtitle {
  display: block;
  font-size: 1.15em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.help-message {
  font-size: 0.9em;
  color: #ccc;
}

ul {
  list-style: none;
  padding-left: 0;
  line-height: 2em;
}

.section {
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #ccc;
}

.hero {
  overflow: auto;
  color: white;
  background: #111;
  padding-bottom: 50px;
}

.search-bar-container {
  max-width: 500px;
  margin: 0 auto;
}

.columns {
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.image-placeholder {
  border: 1px solid #ccc;
  width: 100%;
  height: 150px;
  border-radius: 5px;
}

.featured-services {
  a {
    width: 100%;
  }
}

.getting-started {
  text-align: center;
}
</style>
