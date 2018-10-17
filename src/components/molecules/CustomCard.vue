<template lang="pug">
.customCard
  img.customCard__image(:src="image")
  .customCard__caption {{ custom.name }}
</template>

<script>
export default {
  props: ['custom'],
  data () {
    return {
      image: require(`../../assets/${this.custom.slug}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.customCard {
  position: relative;
  height: 240px;
  &__image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  &__caption {
    position: absolute;
    bottom: 16px;
    width: 100%;
    text-align: center;
    color: white;
    opacity: 0.8;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0 0 6px $black;
  }
}
</style>
