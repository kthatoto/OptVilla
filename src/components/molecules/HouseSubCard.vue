<template lang="pug">
.houseSubCard
  h3 {{ house.option }}
  h2 {{ house.title }}
  p.price 一泊あたり
    span ¥{{ house.pricePerStay }}
  p.rate
    icon.icon(v-for="i in 5" name="star" :key="i" :class="{valid: i < 5}")
    span {{ house.rate }}
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
.houseSubCard {
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  h2 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 0.4rem;
    font-weight: lighter;
    color: #fe7f7f;
    margin-bottom: 10px;
  }
  .price {
    font-size: 0.8rem;
    margin-bottom: 10px;
    span {
      font-weight: bold;
    }
  }
  .rate {
    .icon {
      $iconSize: 15px;
      width: $iconSize;
      height: $iconSize;
      vertical-align: text-bottom;
      &.valid {
        color: #fe7f7f;
      }
    }
    span {
      font-size: 0.8rem;
      margin-left: 3px;
    }
  }
}
</style>
