<template lang="pug">
.house
  Keyvisual.keyvisual
  .main
    .leftColumn
      house-detail(:house="house" ref="hd")
    .rightColumn
      Reservation(:house="house" :selectedDate="selectedDate")
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseDetail from '@/components/organisms/HouseDetail'
import Reservation from '@/components/organisms/Reservation'
import sampleHouse from '@/sampleData/house'
export default {
  components: { Keyvisual, HouseDetail, Reservation },
  data () {
    return {
      house: {},
      selectedDate: {
        start: null,
        end: null
      }
    }
  },
  created () {
    this.house = sampleHouse
  },
  methods: {
    flashCalendarDates () {
      this.$refs.hd.flashCalendarDates()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.house {
  .main {
    width: $globalWidth;
    margin: 0 auto;
    display: flex;
  }
  .keyvisual {
    margin-bottom: 100px;
  }
  $leftColumnWidth: 720px;
  .leftColumn {
    float: left;
    width: $leftColumnWidth;
  }
  .rightColumn {
    float: left;
    padding-left: 60px;
    width: calc(#{$globalWidth} - #{$leftColumnWidth});
  }
}
</style>
