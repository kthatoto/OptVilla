<template lang="pug">
.house
  Keyvisual.keyvisual
  .main
    .leftColumn
      house-detail(:house="house")
    .rightColumn
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseDetail from '@/components/organisms/HouseDetail'
import sampleHouse from '@/sampleData/house'
export default {
  components: { Keyvisual, HouseDetail },
  data () {
    return {
      house: {}
    }
  },
  created () {
    this.house = sampleHouse
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.house {
  .main {
    width: $globalWidth;
    margin: 0 auto;
  }
  .keyvisual {
    margin-bottom: 100px;
  }
  $leftColumnWidth: 700px;
  .leftColumn {
    width: $leftColumnWidth;
  }
  .rightColumn {
    width: calc(#{$globalWidth} - #{$leftColumnWidth});
  }
}
</style>
