<template lang="pug">
.calendar
  .days
    .day(v-for="day in ['日', '月', '火', '水', '木', '金', '土']") {{ day }}
  .dates
    .date.-empty(v-for="(date, index) in marginDates" :key="index")
    .date(v-for="(date, index) in dates" :key="index"
      :class="{'-available': date.date.getDate() % 3 === 0}") {{ date.date.getDate() }}
</template>

<script>
export default {
  props: ['year', 'month', 'availableDates'],
  data () {
    return {
      marginDates: [],
      dates: []
    }
  },
  created () {
    this.marginDates = new Array(new Date(this.year, this.month).getDay())
    const currentMonthDateNumber = new Date(this.year, this.month + 1, 0).getDate()
    let dates = []
    for (let i = 1; i <= currentMonthDateNumber; i++) {
      dates.push({
        date: new Date(this.year, this.month, i)
      })
    }
    this.dates = dates
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.calendar {
  $betweenMargin: 10px;
  .days, .dates {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    .day, .date {
      text-align: center;
      width: calc((100% - #{$betweenMargin} * 6) / 7);
      &:last-child {
        margin-right: 0;
      }
      &:not(:nth-child(7n)) {
        margin-right: $betweenMargin;
      }
    }
  }
  .days {
    .day {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }
  .dates {
    .date {
      height: 40px;
      margin-bottom: 10px;
      &:not(.-empty) {
        background-color: white;
        border-radius: 10px;
        line-height: 40px;
        font-size: 14px;
      }
      &.-available {
        background-color: $pink;
        color: white;
        cursor: pointer;
      }
      &:not(.-available) {
        cursor: not-allowed;
      }
    }
  }
}
</style>
