<template lang="pug">
.home
  Keyvisual.keyvisual
    house-sub-card.keyvisual__houseSubCard(:house="topHouse")
  div.main
    Recommends
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseSubCard from '@/components/molecules/HouseSubCard'
import Recommends from '@/components/organisms/Recommends'
export default {
  components: { Keyvisual, HouseSubCard, Recommends },
  data () {
    return {
      topHouse: {
        title: '会津 伝統的な城下町の清潔な部屋。観光の拠点に最適！',
        option: '屋根裏部屋 ベッド1台 福島県',
        pricePerStay: 3000,
        rate: '4.0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  $mainWidth: 800px;
  .keyvisual {
    margin-bottom: 70px;
    &__houseSubCard {
      position: absolute;
      bottom: -50px;
      left: calc((100% - #{$mainWidth}) / 2);
    }
  }
  .main {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
