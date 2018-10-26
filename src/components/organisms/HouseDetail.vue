<template lang="pug">
.houseDetail
  h1 {{ house.title }}
  p.houseDetail__number
    | 許可・登録番号
    span M130002147
  p.houseDetail__explanation(v-text="house.body" style="white-space: pre;")
  h3 予約可能状況
  .houseDetail__calendar
    available-date-calendar(:availableDates="house.available_date")
  h3 基本情報
  .houseDetail__basicInfo
    .row
      .header チェックイン
      .data {{ house.check_in_time }}
    .row
      .header チェックアウト
      .data {{ house.check_out_time }}
    .row
      .header 施設・設備
      .data
        table
          tr
            td 寝室 {{ house.bed_room }}部屋
            td ベッド {{ house.bed_num }}台
          tr
            td トイレ {{ house.toilet_num }}台
            td キッチン {{ house.kitchen_num }}台
          tr
            td(v-for="i in Math.min(3, house.facilyty.length)" :key="i")
              | ○{{ house.facilyty[i - 1] }}
    .row
      .header 共通アメニティー
      .data
        .record(v-for="amenity in house.amenity") ○{{ amenity }}
    .row
      .header ペット
      .data {{ house.pet }}
    .row
      .header お子様
      .data(v-text="house.child" style="white-space: pre;")
  h3 フードオプション
  Customs.houseDetail__customs.customs(:customs="customs" :title="false")
  h3 アクセス
  p.houseDetail__access(v-text="house.access" style="white-space: pre;")
  gmap-map.houseDetail__map(:center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain"
    style="width: 100%; height: 300px")
  h3.houseDetail__rate-header
    span レビュー
    span
      Rate.rate(:rate="rate")
</template>

<script>
import Customs from '@/components/organisms/Customs'
import Rate from '@/components/molecules/Rate'
import AvailableDateCalendar from '@/components/organisms/AvailableDateCalendar'
import sampleCustoms from '@/sampleData/customs'
export default {
  components: { Customs, Rate, AvailableDateCalendar },
  props: ['house'],
  data () {
    return {
      customs: []
    }
  },
  computed: {
    rate () {
      return 4
    }
  },
  created () {
    this.customs = sampleCustoms
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.houseDetail {
  h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 18px;
  }
  p {
    font-size: 14px;
  }
  &__number {
    color: $gray;
    margin-bottom: 18px;
    span {
      color: $pink;
      margin-left: 10px;
    }
  }
  &__explanation {
    padding-bottom: 18px;
    line-height: 1.8;
    border-bottom: 1px solid $gray;
    margin-bottom: 48px;
  }
  &__calendar {
    margin-bottom: 48px;
  }
  &__basicInfo {
    font-size: 14px;
    .row {
      margin-bottom: 36px;
      overflow: hidden;
      clear: both;
    }
    .header {
      width: 180px;
      float: left;
      font-weight: bold;
    }
    .data {
      width: 540px;
      float: left;
      line-height: 1.6;
      overflow: hidden;
      table {
        td {
          width: 180px;
          padding-bottom: 20px;
        }
        tr:last-child td {
          padding-bottom: 0;
        }
      }
      .record {
        width: 180px;
        float: left;
        margin-bottom: 20px;
      }
    }
  }
  &__map {
    margin-bottom: 48px;
  }
  /deep/ .customs {
    .customCard {
      width: 345px;
      height: calc(240px * 345 / 360);
    }
  }
  &__customs {
    margin-bottom: 48px;
  }
  &__access {
    margin-bottom: 18px;
  }
  &__rate {
    &-header {
      > span {
      }
    }
  }
}
</style>
