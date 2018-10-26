<template lang="pug">
.customs
  h2(v-if="title !== false")
    span.prebox
    | フードオプションから選ぶ
  .customs__list
    img.customs__cursor.-left(:src="require('../../assets/ButtonLeft.png')")
    img.customs__cursor.-right(:src="require('../../assets/ButtonRight.png')")
    .customs__scroll
      CustomCard.customs__item(v-for="custom in customs" :key="custom.id" :custom="custom")
</template>

<script>
import CustomCard from '@/components/molecules/CustomCard'
export default {
  props: ['customs', 'title'],
  components: { CustomCard },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.customs {
  h2 {
    margin-bottom: 30px;
    font-size: 28px;
  }
  &__list {
    position: relative;
    width: 100%;
  }
  &__scroll {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
  }
  &__item {
    display: inline-block;
    width: 360px;
    margin-right: 30px;
    &:last-child {
      margin: 0;
    }
  }
  &__cursor {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 1;
    filter: drop-shadow(0 0 6px $black);
    cursor: pointer;
    &.-left {
      left: -25px;
      top: calc(50% - 25px);
    }
    &.-right {
      right: -25px;
      top: calc(50% - 25px);
    }
  }
}
</style>
