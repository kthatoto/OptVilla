<template lang="pug">
.availableDateCalendar
  Calendar(:year="year" :month="month").calendar
  Calendar(:year="next.year", :month="next.month").calendar
</template>

<script>
import Calendar from '@/components/molecules/Calendar'
export default {
  components: { Calendar },
  props: ['year', 'month'],
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
