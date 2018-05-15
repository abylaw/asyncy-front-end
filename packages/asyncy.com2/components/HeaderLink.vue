<template>
  <span class="link" :style="{
    position: 'relative',
  }">
    <url-link :to="to">
      <slot></slot>
    </url-link>
  </span>
</template>

<script>
import UrlLink from '~/components/UrlLink';

export default {
  props: ['to'],
  components: {
    UrlLink,
  }
}
</script>

<style scoped lang="styl">
.link
  &:before
    content: ""
    position: absolute
    width: 100%
    height: 2px
    bottom: -9px
    background-color: #888
    visibility: hidden
    transform: scaleX(0)
    transition: all 0.15s ease-out 0s
  &:hover:before
    visibility: visible
    transform: scaleX(1)
  &:hover a
    color: #D1D1D1
    transition: all 0.15s ease-in-out 0s

</style>
