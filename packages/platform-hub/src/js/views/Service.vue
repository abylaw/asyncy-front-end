<template>
  <div class="index">
    <app-header hasSearchBar="true"></app-header>
    <div class="columns">
      <div class="column is-one-fifth sidebar">
        <div>
          <p class="has-text-weight-bold">Topics</p>
          <div><span class="tag">Marketing</span></div>

          <p class="has-text-weight-bold">Developer Links</p>
          <ul>
            <li><a href="/">Github</a></li>
            <li><a href="/">Support</a></li>
          </ul>
        </div>
      </div>
      <div class="column is-7">
        <div class="level name-container is-mobile">
          <div class="level-left">
            <h1>Name</h1><i class="fas fa-check checkmark" aria-hidden="true"></i>
          </div>
        </div>
        <div class="level-left">
          <button class="button is-primary">Add to your story</button><span class="margin-left-3">or <a href="/">try a demo</a></span>
        </div>
        <div>
          <h4>Overview</h4>
          <p>Fusce auctor leo sit amet dolor consequat eleifend. Sed posuere libero odio, eget fermentum enim semper eu. Integer mollis odio eget consectetur laoreet. Vivamus ut elit non tellus aliquet egestas. Vivamus consectetur, enim sit amet.</p>
        </div>
        <div>
          <h4>Commands</h4>

          <code class="code">twitter tweet <span class="tag">Message (string)</span> --reply-to [int]</code>
          <p>Send a tweet or reply to a tweet</p>

          <code class="code">twitter follow [profile-str]</code>
          <p>Send a tweet or reply to a tweet</p>

          <code class="code">twitter unfollow [profile-str]</code>
          <p>Send a tweet or reply to a tweet</p>

          <div class="expand-box">
            View all commands <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
          <a href="/">View all documentation here →</a>
        </div>
      </div>
    </div>
    <div class="pricing-bar">
      <div class="columns">
        <div class="column is-one-fifth"></div>
        <div class="column is-9">
          <div>
            <h3>Pricing</h3>
          </div>
          <div class="columns">
            <div class="column is-half pricing-bar-left">
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
              <div class="box is-disabled">
                <div class="level">
                  <div class="level-left">
                    Small
                  </div>
                  <div class="level-right">
                    $10
                  </div>
                </div>
              </div>
              <div class="box is-disabled">
                <div class="level">
                  <div class="level-left">
                    Medium
                  </div>
                  <div class="level-right">
                    $20
                  </div>
                </div>
              </div>
              <div class="box is-disabled">
                <div class="level">
                  <div class="level-left">
                    Large
                  </div>
                  <div class="level-right">
                    $30
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="has-text-weight-bold">List title</div>
                <ul class="pricing-details fa-ul">
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                  <li><span class="fa-li"><i class="fas fa-check"></i></span>Phasellus porttitor cursus lectus ac sagittis. Phasellus.</li>
                </ul>
                <button class="button">Checkout</button>
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
  margin: 0;
}

.sidebar ul {
  line-height: 2em;
}

.name-container {
  margin-top: 1em;
  margin-bottom: 1.5em;
  line-height: 2.8em;
}

.checkmark {
  margin-left: 0.8em;
  font-size: 1em;
  color: #3E87DA;
}

.margin-left-3 {
  margin-left: 0.8em;
}

.sidebar {
  ul {
    list-style: none;
    padding-left: 0;
  }

  .tag {
    font-size: 0.9em;
  }
}

.code {
  font-size: 1.3em;

  .tag {
    font-size: 1em;
    background: #E181E5;
  }
}

.expand-box {
  color: #C0C0C0;
  border: 1px solid #F0F0F0;
  border-radius: 0 0 4px 4px;
  text-align: center;
  padding: 12px;
  margin-bottom: 2em;
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
  margin-top: 2em;

  .pricing-bar-left {
    padding-left: 0;
  }

  .is-disabled {
    border: 1px solid #979797;
    opacity: 0.22;
  }

  .button {
    padding: 0px 56px;
  }
}

.pricing-details {
  margin-left: 0em;
  padding-left: 1.3em;
  list-style: none;

  .fa-check {
    color: #2FC050;
    font-size: 0.95em;
  }
}
</style>
