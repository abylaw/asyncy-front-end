<template>
  <div class='container column' :style="{
    alignSelf: 'flex-start',
  }">
    <div :style="{
      width: '215px',
      height: '215px',
      margin: '0 auto',
    }">
      <div :style="{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gridRowGap: '15px',
        gridColumnGap: '15px',
      }">
        <div :style="{marginBottom: 0, gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 1, gridRowEnd: 1}">
          <img :src="images[0]" :style="{ marginBottom: 0, objectFit: 'cover', width: '100px' }"/>
        </div>
        <div :style="{marginBottom: 0, gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 1}">
          <img :src="images[1]" :style="{ marginBottom: 0, objectFit: 'cover', width: '100px' }"/>
        </div>
        <div :style="{marginBottom: 0, gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 2, gridRowEnd: 2}">
          <img :src="images[2]" :style="{ marginBottom: 0, objectFit: 'cover', width: '100px' }"/>
        </div>
        <div :style="{marginBottom: 0, gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 2}">
          <img :src="images[3]" :style="{ marginBottom: 0, objectFit: 'cover', width: '100px' }"/>
        </div>
      </div>
    </div>
    <div :style="{
      marginTop: '1em',
    }">
      <strong>{{name}}</strong>
      <p :style="{
        marginBottom: '0.6em',
        marginTop: '0.2em',
      }">{{role}}</p>
      <a :href="`https://twitter.com/${twitterHandle}`">
        <img :style="{
          width: '14px',
          height: '14px',
          margin: 0,
        }" :src="twitterLogo"/>
      </a>
    </div>
  </div>
</template>

<script>
import twitterLogo from '../assets/images/twitter_logo.svg'

export default {
  props: ['name', 'role', 'twitterHandle', 'images'],
  data() {
    return {
      twitterLogo,
    }
  },
}
</script>

<style scoped>
.container {
  @media (max-width: 768px) {
    text-align: center;
  }
}
</style>
