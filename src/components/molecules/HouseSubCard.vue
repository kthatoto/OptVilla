<template lang="pug">
.houseSubCard
  p.location
    icon.icon.-left(name="map-marker-alt")
    | {{ house.prefecture }}, {{ house.city }}
  h2 {{ house.title }}
  p.price
    span.first １泊
    span.second(v-if="house.maxStayerNumber")  (最大{{ house.max_stay_number }}人)
    span.third /
    span.fourth ¥{{ house.price.toLocaleString() }}~
  Rate(:rate="rate")
</template>

<script>
import Rate from '@/components/molecules/Rate'
export default {
  props: ['house'],
  components: { Rate },
  computed: {
    rate () {
      return 4
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.houseSubCard {
  background-color: $white;
  padding: 24px 24px 50px;
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  .location {
    color: $pink;
    font-size: 14px;
    margin-bottom: 8px;
    .icon {
      width: 14px;
      height: 14px;
      color: $pink;
    }
  }
  .price {
    font-size: 14px;
    margin-bottom: 10px;
    .first, .second, .fourth {
      font-weight: bold;
    }
    .third {
      margin: 0 5px;
    }
  }
}
</style>
