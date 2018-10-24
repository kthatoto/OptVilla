<template lang="pug">
.rate
  .emptyStars
    span.star(v-for="i in 5" :key="i")
      icon.icon(name="star")
  .valueStars(v-if="rate")
    span.star(v-for="i in 5" :key="i"
      v-if="Math.ceil(rate) >= i"
      :style="{width: i === Math.ceil(rate) && rate % 1 > 0 ? 20 * (rate % 1) + 'px' : '20px'}")
      icon.icon(name="star")
</template>

<script>
export default {
  props: ['rate', 'size']
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.rate {
  position: relative;
  .emptyStars, .valueStars {
    position: absolute;
  }
  .star {
    overflow: hidden;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  .emptyStars {
    .icon {
      color: gray;
    }
  }
  .valueStars {
    .icon {
      color: $pink;
    }
  }
}
</style>
