<template lang="pug">
.home
  Keyvisual
    house-sub-card.keyvisual__houseSubCard(:house="topHouse")
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseSubCard from '@/components/molecules/HouseSubCard'
export default {
  components: { Keyvisual, HouseSubCard },
  data () {
    return {
      topHouse: {
        title: '会津 伝統的な城下町の清潔な部屋。観光の拠点に最適！',
        option: '屋根裏部屋 ベッド1台 福島県',
        pricePerStay: 3000,
        rate: 4.0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.keyvisual {
  &__houseSubCard {
    position: absolute;
    bottom: -50px;
    left: 20%;
  }
}
</style>
