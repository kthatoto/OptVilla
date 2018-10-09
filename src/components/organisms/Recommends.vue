<template lang="pug">
.recommends
  h3 あなたへのおすすめ
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
.recommends {
  h3 {
    margin-bottom: 10px;
    font-size: 1rem;
  }
  &__houseCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__houseCard {
    width: 31%;
    margin-bottom: 30px;
  }
}
</style>
