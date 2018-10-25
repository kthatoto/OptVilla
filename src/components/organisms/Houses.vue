<template lang="pug">
.houses
  h2(v-if="title")
    span.prebox
    | {{ title }}
    router-link.showToggle(to="/search")
      | {{ '全て表示' }}
      icon.icon.-right(name="chevron-down")
  .houses__houseCards
    house-card.houses__houseCard(v-for="(house, index) in houses" :house="house" :key="house.id")
</template>

<script>
import HouseCard from '@/components/molecules/HouseCard'
export default {
  props: ['houses', 'title'],
  components: { HouseCard }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.houses {
  h2 {
    margin-bottom: 30px;
    font-size: 28px;
    position: relative;
  }
  &__houseCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__houseCard {
    width: 360px;
    margin-bottom: 48px;
  }
  .showToggle {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: $blue;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: $hoverBlue;
    }
  }
}
</style>
