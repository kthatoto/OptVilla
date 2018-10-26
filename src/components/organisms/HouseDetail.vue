<template lang="pug">
.houseDetail
  h1 {{ house.title }}
  p.houseDetail__number
    | 許可・登録番号
    span M130002147
  p.houseDetail__explanation(v-text="house.body" style="white-space: pre;")
  h3#calendars.-caleanderHeader 予約可能状況
  .houseDetail__calendar
    available-date-calendar(:availableDates="house.available_date" ref="adc")
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
            td 寝室 {{ house.bed_room_num }}部屋
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
  gmap-map.houseDetail__map(:center="{lat: house.latitude, lng: house.longitude}" :zoom="13"
    style="width: 100%; height: 300px")
  h3.houseDetail__rate
    span.-header レビュー
    span.-rate
      Rate.rate(:rate="rate")
    span.-figure {{ rate }}
  .houseDetail__rateDetail
    .rateDetail
      div 満足度
      div
        Rate(:rate="house.reviews.satisfaction")
    .rateDetail
      div 清潔さ
      div
        Rate(:rate="house.reviews.cleanliness")
    .rateDetail
      div コスパ
      div
        Rate(:rate="house.reviews.cost_performance")
    .rateDetail
      div 客室・アメニティー
      div
        Rate(:rate="house.reviews.amenity")
    .rateDetail.-lastRow
      div 眺め
      div
        Rate(:rate="house.reviews.location")
    .rateDetail.-lastRow
      div アクセス
      div
        Rate(:rate="house.reviews.access")
  .houseDetail__reviews
    .review(v-for="review in house.room_reviews" :key="review.id")
      .review__header
        h4
          span.-name {{ review.reviewer }}さん
          span のレビュー
        .rate
          icon.icon(name="star")
          span.-figure {{ review.review }}
        .date 投稿日 {{ review.created_at }}
      .body(v-text="review.body" style="white-space: pre;")
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
      const reviews = Object.entries(this.house.reviews)
      let sum = 0
      reviews.forEach(review => {
        sum += review[1]
      })
      return sum / reviews.length
    }
  },
  created () {
    this.customs = sampleCustoms
  },
  methods: {
    flashCalendarDates () {
      this.$refs.adc.flashCalendarDates()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
h1 {
  font-size: 28px;
  margin-bottom: 8px;
}
h3 {
  font-size: 22px;
  margin-bottom: 18px;
  &.-caleanderHeader {
    padding-top: 48px;
  }
}
p {
  font-size: 14px;
}
.houseDetail {
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
    overflow: hidden;
    border-bottom: 1px solid $gray;
    padding-bottom: 10px;
    > span {
      float: left;
    }
    .-header {
      width: 180px;
    }
    .rate {
      width: 108px;
      height: 30px;
      margin-top: 2px;
    }
    .-figure {
      font-size: 14px;
      font-weight: normal;
      line-height: 30px;
      height: 30px;
      margin-left: 10px;
      padding-top: 2px;
    }
  }
  &__rateDetail {
    overflow: hidden;
    border-bottom: 1px solid $gray;
    margin-bottom: 24px;
    .rateDetail {
      font-size: 16px;
      font-weight: bold;
      width: 360px;
      float: left;
      margin-bottom: 24px;
      > div {
        width: 180px;
        float: left;
      }
      &.-lastRow {
        margin-bottom: 18px;
      }
    }
  }
  &__reviews {
    .review {
      padding-bottom: 24px;
      width: 100%;
      border-bottom: 1px solid $gray;
      margin-bottom: 24px;
      &__header {
        overflow: hidden;
        margin-bottom: 12px;
      }
      h4 {
        font-size: 14px;
        float: left;
        .-name {
          color: $pink;
        }
        height: 20px;
        line-height: 20px;
      }
      .rate {
        float: left;
        height: 20px;
        line-height: 20px;
        .icon {
          margin: 0 15px;
          width: 15px;
          height: 15px;
          vertical-align: text-top;
          color: $starPink;
        }
        .-figure {
          font-size: 14px;
        }
      }
      .date {
        font-size: 14px;
        float: right;
      }
      .body {
        font-size: 14px;
      }
    }
  }
}
</style>
