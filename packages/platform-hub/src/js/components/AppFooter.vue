<template>
  <div class="app-footer">
    <nav class="nav">
      <div class="columns">
        <div class="column">
          <div>Platform</div>
          <ul class="ul">
            <li class="li"><a href="https://refresh--asyncy-homepage.netlify.com/platform">Overview</a></li>
            <li class="li"><a href="https://hub.asyncy.com">Hub</a></li>
            <li class="li"><a href="https://app.asyncy.com">App</a></li>
            <li class="li"><a href="/">Status</a></li>
            <li class="li"><a href="https://refresh--asyncy-homepage.netlify.com/faq">FAQ</a></li>
          </ul>
        </div>
        <div class="column">
          <div>Resources</div>
          <ul class="ul">
            <li class="li"><a href="https://docs.asyncy.com">Documentation</a></li>
            <li class="li"><a href="/">Examples</a></li>
            <li class="li"><a href="https://refresh--asyncy-homepage.netlify.com/events">Events</a></li>
            <li class="li"><a href="/">Legal</a></li>
          </ul>
        </div>
        <div class="column">
          <div>Company</div>
          <ul class="ul">
            <li class="li"><a href="https://refresh--asyncy-homepage.netlify.com/about">About</a></li>
            <li class="li"><a href="https://blog.asyncy.com">Blog</a></li>
            <li class="li"><a href="https://angel.co/asyncy/jobs">Careers</a></li>
            <li class="li"><a href="https://refresh--asyncy-homepage.netlify.com/contact">Contact</a></li>
          </ul>
        </div>
        <div class="column">
          <div class="level-right">
            <div class="level-item logo">
              <a href="http://asyncy.click/slack">
                <img src="../../assets/slack_logo.svg"/>
              </a>
            </div>
            <div class="level-item logo">
              <a href="https://github.com/asyncy">
                <img src="../../assets/github_logo.svg"/>
              </a>
            </div>
            <div class="level-item logo">
              <a href="https://twitter.com/asyncy">
                <img src="../../assets/twitter_logo.svg"/>
              </a>
            </div>
            <div class="copyright">
              © 2018 Asyncy, Inc.
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.app-footer {
  position: relative;
  background-color: #111;
  color: white;
  padding: 10px;
  padding-top: 75px;
  padding-bottom: 55px;
  font-size: 0.9em;
  text-align: left;
}

.logo {
  display: inline-block;
  margin-left: 20px;

  img {
    width: 30px;
    height: 30px;
  }
}

.copyright {
  position: absolute;
  color: #666;
  bottom: 25px;
}

.nav {
  max-width: 1000px;
  padding: 0 25px;
  margin: 0 auto;
}

.ul {
  list-style: none;
  padding-left: 0;
}

.li {
  font-size: 1.1em;
  margin-bottom: 0.5em;
}

.li a {
  color: #A3A3A3;
  font-size: 0.95em;
  line-height: 1.6em;
}

.li a:hover {
  color: white;
  transition: color 0.3s ease-out;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.menuHeader {
  font-size: 1em;
  color: white;
  margin-bottom: 1em;
}
</style>
