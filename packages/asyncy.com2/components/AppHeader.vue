<template>
  <div
    :style="{
      marginTop: '40px',
      marginBottom: '25px',
    }"
  >
    <div
      class='columns'
      :style="{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0 25px',
      }"
    >
      <div class='column is-half' :style="{
        padding: 0,
      }">
        <div class='columns is-mobile'>
          <div class='column'>
            <nuxt-link to='/'><app-logo :style="{
              margin: 0,
            }"/></nuxt-link>
          </div>
          <div v-if="!mobileMenuOpen" class='column is-narrow is-hidden-tablet'>
            <div :style="{
              fontSize: '32px',
              lineHeight: '20px',
              verticalAlign: 'top',
            }">
              <a @click="openMenu">☰</a>
            </div>
          </div>
        </div>
      </div>

      <div class="is-hidden-tablet" v-if="mobileMenuOpen" :style="{
        position: 'fixed',
        background: 'black',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        left: 0,
        top: 0,
        padding: '23px',
        zIndex: '3000',
      }">
        <div :style="{
          width: '100%',
          textAlign: 'right',
          fontSize: '2em',
          paddingBottom: '25px',
        }">
          <a @click="closeMenu">✕</a>
        </div>
        <nav>
          <ul class='columns' :style="{
            textAlign: 'center',
            fontSize: '1.2em',
            paddingLeft: '0',
          }">
            <li v-for="(link, key) in mobileHeaderLinks" class='column' :key="key" :style="{
              padding: '22px',
            }">
              <header-link :to="link.to" @click="closeMenu">{{link.text}}</header-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class='column is-hidden-mobile' :style="{
        padding: 0,
      }">
        <nav>
          <ul class='columns' :style="{
            textAlign: 'center',
            fontSize: '1.06em',
            paddingLeft: '0',
          }">
            <li v-for="(link, key) in headerLinks" class='column' :key="key">
              <header-link :to="link.to">{{link.text}}</header-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo';
import HeaderLink from '~/components/HeaderLink';

const headerLinks = [
  { text: 'Platform', to: '/platform' },
  { text: 'Documentation', to: 'https://docs.asyncy.com' },
  { text: 'About', to: '/about' },
  { text: 'Events', to: '/events' },
  { text: 'Contact', to: '/contact' },
]

const mobileHeaderLinks = headerLinks.slice()
mobileHeaderLinks.unshift({ text: 'Home', to: '/'})

export default {
  components: {
    AppLogo,
    HeaderLink,
  },
  data() {
    return {
      mobileMenuOpen: false,
      headerLinks: headerLinks,
      mobileHeaderLinks: mobileHeaderLinks,
    };
  },
  methods: {
    openMenu() {
      this.mobileMenuOpen = true;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    },
  }
}
</script>

<style>

</style>
