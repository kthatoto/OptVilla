<template lang="pug">
.calendar
  .days
    .day(v-for="day in ['日', '月', '火', '水', '木', '金', '土']") {{ day }}
  .dates
    .date.-empty(v-for="(date, index) in marginDates" :key="'empty' + index")
    .date(v-for="(date, index) in dates" :key="index" @click="$parent.selectDate(date.date)"
      :class="{'-available': date.available, '-selected': selected(index)}")
        | {{ date.date.getDate() }}
</template>

<script>
export default {
  props: ['year', 'month', 'availableDates', 'selectedDate'],
  data () {
    return {
      marginDates: [],
      dates: []
    }
  },
  created () {
    this.prepare()
  },
  methods: {
    selected (index) {
      const date = this.dates[index].date
      const inner = this.selectedDate.start <= date && date <= this.selectedDate.end
      return this.selectedDate.selecting && inner
    },
    prepare () {
      this.marginDates = new Array(new Date(this.year, this.month).getDay())
      const currentMonthDateNumber = new Date(this.year, this.month + 1, 0).getDate()
      let dates = []
      for (let i = 1; i <= currentMonthDateNumber; i++) {
        const formattedDate = `${this.year}-${this.month + 1}-${('00' + i).slice(-2)}`
        const available = this.availableDates.indexOf(formattedDate) >= 0
        dates.push({
          date: new Date(this.year, this.month, i),
          available: available,
          formattedDate: formattedDate
        })
      }
      this.dates = dates
    }
  },
  watch: {
    month () {
      this.prepare()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.calendar {
  $betweenMargin: 10px;
  .days, .dates {
    display: flex;
    flex-wrap: wrap;
    user-select: none;
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
        &:hover {
          background-color: $thinPink;
        }
        &.-selected {
          background-color: $blue;
        }
      }
      &:not(.-available) {
        cursor: not-allowed;
      }
    }
  }
}
</style>
