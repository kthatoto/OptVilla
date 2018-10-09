<template lang="pug">
.houseCard
  .houseCard__thumbnail
  house-sub-card.houseCard__subCard(:house="house")
</template>

<script>
import HouseSubCard from '@/components/molecules/HouseSubCard'
export default {
  components: { HouseSubCard },
  props: ['house']
}
</script>

<style lang="scss" scoped>
.houseCard {
  position: relative;
  border-radius: 10px;
  height: 400px;
  background-color: white;
  overflow: hidden;
  &__thumbnail {
    background-color: gray;
    height: 200px;
  }
  &__subCard {
    position: absolute;
    top: 180px;
  }
}
</style>
