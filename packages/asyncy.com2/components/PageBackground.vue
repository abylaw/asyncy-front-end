<template>
  <div>
    <div class="left-image" :style="{
      backgroundImage: `url(${leftImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: `calc(1200px * ${scale || 1})`,
      height: `calc(700px * ${scale || 1})`,
      position: 'absolute',
      zIndex: '-1',
      left: leftX ? `${leftX}px` : '-700px',
      top: leftY ? `${leftY}px` : '-64px',
    }"/>
    <div class="right-image" :style="{
      position: 'absolute',
      zIndex: '-1',
      width: '450px',
      height: '700px',
      overflow: 'hidden',
      top: rightY ? `${rightY}px` : '-170px',
      right: rightX ? `${rightX}px` : '0px',
    }">
      <div :style="{
        backgroundImage: `url(${rightImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: `calc(1200px * ${scale || 1})`,
        height: `calc(700px * ${scale || 1})`,
      }"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale'],
}
</script>

<style scoped lang="styl">
/*.left-image
  @media (max-width: 768px)
    left -950px !important

.right-image
  @media (max-width: 768px)
    width 250px !important*/
</style>
