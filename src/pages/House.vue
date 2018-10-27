<template lang="pug">
.house
  Keyvisual.keyvisual(:house="house")
  .main
    .leftColumn
      house-detail(:house="house" :a="a" ref="hd")
    .rightColumn
      Reservation(:house="house" :selectedDate="selectedDate")
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseDetail from '@/components/organisms/HouseDetail'
import Reservation from '@/components/organisms/Reservation'
import sampleHouse from '@/sampleData/house'

import api from '@/utils/Api'
export default {
  components: { Keyvisual, HouseDetail, Reservation },
  data () {
    return {
      house: {},
      selectedDate: {
        start: null,
        end: null
      },
      a: []
    }
  },
  created () {
    api('GET',
      process.env.API_ENDPOINT + '/api/rooms/' + this.$route.params.id,
      {}
    ).then(response => {
      const data = response.data
      this.house = data
    })
    this.a = sampleHouse.available_date
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
