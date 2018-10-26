<template lang="pug">
.availableDateCalendar
  Calendar(:year="year" :month="month" :availableDates="availableDates").calendar
  Calendar(:year="next.year", :month="next.month" :availableDates="availableDates").calendar
</template>

<script>
import Calendar from '@/components/molecules/Calendar'
export default {
  components: { Calendar },
  props: ['year', 'month', 'availableDates'],
  data () {
    return {
      next: {
        year: -1,
        month: -1
      }
    }
  },
  created () {
    const nextMonth = new Date(this.year, this.month + 1)
    this.next.year = nextMonth.getFullYear()
    this.next.month = nextMonth.getMonth()
  }
}
</script>

<style lang="scss" scoped>
.availableDateCalendar {
  display: flex;
  justify-content: space-between;
  .calendar {
    float: left;
    width: 340px;
  }
}
</style>
