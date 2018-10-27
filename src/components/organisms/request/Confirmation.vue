<template lang="pug">
.confirmation
  .main
    .inner
      h2 {{ reservation.title }}
      table
        tr
          td 日程
          td
          td
          td
            span(v-if="reservation.start === reservation.end") {{ reservation.startFormatted }}
            span(v-else) {{ reservation.startFormatted }} ~ {{ reservation.endFormatted }}
        tr
          td 人数
          td
          td.people(colspan="2")
            span 大人{{ reservation.people.adult }}人
            span(v-if="reservation.people.child > 0") 小人{{ reservation.people.child }}人
            span(v-if="reservation.people.infant > 0") 乳幼児{{ reservation.people.infant }}人
        tr.options
          td オプション
          td
          td(colspan="2")
            div(v-for="custom in reservation.customs" :key="custom.slug") {{ custom.name }}
            div(v-if="reservation.customs.length === 0") なし
        tr.prices
          td 料金
          td
            div 宿泊料金
            div(v-for="custom in reservation.customs" :key="custom.slug") {{ custom.name }}
          td
            div ¥{{ reservation.price.toLocaleString() }} × {{ reservation.dateCount }}
            div(v-for="custom in reservation.customs" :key="custom.slug")
              | ¥{{ custom.price.toLocaleString() }} × {{ peopleCount() }}
          td
            div ¥{{ (reservation.price * reservation.dateCount).toLocaleString() }}
            div(v-for="custom in reservation.customs" :key="custom.slug")
              | ¥{{ (custom.price * peopleCount()).toLocaleString() }}
        tr.total
          td
          td 計
          td
          td ¥{{ reservation.total.toLocaleString() }}
  .prev(@click="$parent.progress = 'payment'") 前へ
  .next(@click="$parent.progress = 'complete'") 確定
</template>

<script>
export default {
  data () {
    return {
      reservation: {}
    }
  },
  created () {
    this.reservation = JSON.parse(localStorage.reservation)
  },
  methods: {
    peopleCount () {
      const people = this.reservation.people
      return people.adult + people.child
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.confirmation {
  .main {
    background-color: white;
    border-radius: 10px;
    padding: 20px 0;
    margin-bottom: 24px;
    .inner {
      width: 50%;
      margin: 0 auto;
    }
  }
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid $gray;
      td {
        padding: 8px 0;
        &:first-child {
          text-align: left;
          vertical-align: top;
        }
        &:last-child {
          text-align: right;
        }
        &.people {
          span {
            margin-left: 10px;
          }
        }
      }
      &.options {
        td:last-child {
          > div {
            margin-bottom: 5px;
          }
        }
      }
      &.prices {
        td {
          > div {
            margin-bottom: 5px;
          }
        }
      }
      &.total {
        border-bottom: 0;
        font-weight: bold;
      }
    }
  }
  .next, .prev {
    background-color: $pink;
    width: 25%;
    text-align: center;
    padding: 10px 0;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: $thinPink;
    }
  }
  .prev {
    float: left;
  }
  .next {
    float: right;
  }
}
</style>
