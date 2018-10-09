<template lang="pug">
.home
  Keyvisual
    house-card.keyvisual__houseCard(:house="topHouse")
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseCard from '@/components/molecules/HouseCard'
export default {
  components: { Keyvisual, HouseCard },
  data () {
    return {
      topHouse: {
        title: '会津 伝統的な城下町の清潔な部屋。',
        option: '屋根裏部屋 ベッド1台 福島県'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.keyvisual {
  &__houseCard {
    position: absolute;
    bottom: -50px;
    left: 20%;
  }
}
</style>
