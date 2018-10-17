<template lang="pug">
.recommends
  h2
    span.prebox
    | 人気民泊リゾート
  .recommends__houseCards
    house-card.recommends__houseCard(v-for="house in recommends" :house="house" :key="house.id")
</template>

<script>
import HouseCard from '@/components/molecules/HouseCard'
export default {
  props: ['recommends'],
  components: { HouseCard }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.recommends {
  h2 {
    margin-bottom: 30px;
    font-size: 28px;
  }
  &__houseCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__houseCard {
    width: 360px;
    margin-bottom: 60px;
  }
}
</style>
