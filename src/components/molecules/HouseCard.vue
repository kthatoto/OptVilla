<template lang="pug">
router-link.houseCard(:to="{ name: 'House', params: { id: house.id } }")
  .houseCard__thumbnail(:style="{height: house.height + 'px'}")
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
  display: block;
  &__thumbnail {
    border-radius: 10px;
    background-color: gray;
  }
  &__subCard {
    width: calc(100% - 30px);
    margin-top: -50px;
    border-radius: 0 10px 10px 10px;
  }
}
</style>
