<template>
  <div class="index">
    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>

          <p>Topics</p>
          <div><span class="tag">Marketing</span></div>

          <p>Developer Links</p>
          <ul>
            <li><a href="/">Github</a></li>
            <li><a href="/">Support</a></li>
          </ul>

        </div>
      </div>
      <div class="column is-7">
        <h1>Name</h1>
        <div class="level-left">
          <button>Add to your story</button><span>or <a href="/">try a demo</a></span>
        </div>
        <div>
          <h4>Overview</h4>
          <p>Fusce auctor leo sit amet dolor consequat eleifend. Sed posuere libero odio, eget fermentum enim semper eu. Integer mollis odio eget consectetur laoreet. Vivamus ut elit non tellus aliquet egestas. Vivamus consectetur, enim sit amet.</p>
        </div>
        <div>
          <h4>Commands</h4>

          <code>twitter tweet</code>
          <p>Send a tweet or reply to a tweet</p>

          <a href="/">View all documentation here →</a>
        </div>
      </div>
    </div>
    <div class="pricing-bar">
      <div class="columns">
        <div class="column is-one-fifth"></div>
        <div class="column is-7">
          <div class="level">
            <h3>Pricing</h3>
          </div>
          <div class="columns">
            <div class="column is-half">
              <div class="box">
                <div class="level">
                  <div class="level-left">
                    Free
                  </div>
                  <div class="level-right">
                    $0
                  </div>
                </div>
              </div>
              <div class="box">
                <div class="level">
                  <div class="level-left">
                    Free
                  </div>
                  <div class="level-right">
                    $0
                  </div>
                </div>
              </div>
              <div class="box">
                <div class="level">
                  <div class="level-left">
                    Free
                  </div>
                  <div class="level-right">
                    $0
                  </div>
                </div>
              </div>
                            <div class="box">
                <div class="level">
                  <div class="level-left">
                    Free
                  </div>
                  <div class="level-right">
                    $0
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <h4>List title</h4>
                <ul>
                  <li>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                </ul>
                <button>Checkout</button>
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
  },
};
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

.sidebar ul {
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

.pricing-bar {
  background: #F1F1F1;
  width: 100vw;
}
</style>
