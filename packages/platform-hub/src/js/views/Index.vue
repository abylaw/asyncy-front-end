<template>
  <div class="index">
    <div class="hero">
      <h1>Asyncy Hub</h1>
      <p>Service discovery and marketplace for Asyncy</p>

      <input type="text" placeholder="Search Hub"></input>
      <p>Try topic:social, topic:machine-learning or stars:>100</p>
    </div>

    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>

          <p>Topics</p>
          <ul>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
          </ul>

          <p>Filters</p>
          <ul>
            <li>List 1</li>
            <li>List 1</li>
            <li>List 1</li>
          </ul>

        </div>
      </div>
      <div class="column">
        <div>
          <h2>Featured services</h2>
          <div>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <div class="image-placeholder tile is-child"></div>
              </div>
              <div class="tile is-parent">
                <div class="image-placeholder tile is-child"></div>
              </div>
              <div class="tile is-parent">
                <div class="image-placeholder tile is-child"></div>
              </div>
            </div>
          </div>
        </div>

        <hr/>
        <h2>Recently added</h2>
        <div>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
              <div v-for="r in recentlyAdded.slice(0, 3)" class="tile is-child">
                <recently-added-tile :title="r.title" :description="r.description"></recently-added-tile>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <div v-for="r in recentlyAdded.slice(3, 6)" class="tile is-child">
                <recently-added-tile :title="r.title" :description="r.description"></recently-added-tile>
              </div>
            </div>
          </div>
        </div>
        <hr/>
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

        <hr/>
        <div class="getting-started">
          <h2>List your service on Asyncy Hub</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecentlyAddedTile from '../components/RecentlyAddedTile';

export default {
  name: 'index',
  data() {
    return {
      recentlyAdded: [
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
        {
          title: 'Title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices turpis vel risus cursus.',
        },
      ],
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
    RecentlyAddedTile,
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

.hero {
  overflow: auto;
  color: white;
  background: black;
  padding-bottom: 50px;
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

.getting-started {
  text-align: center;
}
</style>
