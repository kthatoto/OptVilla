<template lang="pug">
router-link.houseCard(:to="{ name: 'House', params: { id: house.id } }")
  img.houseCard__thumbnail(:src="house.image_url")
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
    width: 100%;
  }
  &__subCard {
    width: calc(100% - 30px);
    margin-top: -50px;
    border-radius: 0 10px 10px 10px;
  }
}
</style>
