<template lang="pug">
.availableDateCalendar
  Calendar.calendar(:year="year" :month="month"
    :availableDates="availableDates" :selectedDate="selectedDate")
  Calendar.calendar(:year="next.year", :month="next.month"
    :availableDates="availableDates" :selectedDate="selectedDate")
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
      },
      selectedDate: {
        start: new Date(0),
        end: new Date(0),
        selecting: false
      }
    }
  },
  created () {
    const nextMonth = new Date(this.year, this.month + 1)
    this.next.year = nextMonth.getFullYear()
    this.next.month = nextMonth.getMonth()
  },
  methods: {
    selectDate (date) {
      if (!this.selectedDate.selecting) {
        this.selectedDate.selecting = true
        this.selectedDate.start = date
        this.selectedDate.end = date
      } else {
        if (date < this.selectedDate.start) {
          if (this.datesAvailable(date, this.selectedDate.start)) {
            this.selectedDate.start = date
          } else {
            this.selectedDate.start = date
            this.selectedDate.end = date
          }
        } else if (this.selectedDate.end < date) {
          if (this.datesAvailable(this.selectedDate.end, date)) {
            this.selectedDate.end = date
          } else {
            this.selectedDate.start = date
            this.selectedDate.end = date
          }
        } else if (this.selectedDate.start <= date && date <= this.selectedDate.end) {
          this.selectedDate.start = date
          this.selectedDate.end = date
        }
      }
    },
    datesAvailable (start, end) {
      let idate = new Date(start.getFullYear(), start.getMonth(), start.getDate())
      let datesAvailable = true
      while (idate < end) {
        const formattedDate = `${idate.getFullYear()}-${idate.getMonth() + 1}-${('00' + idate.getDate()).slice(-2)}`
        if (this.availableDates.indexOf(formattedDate) < 0) {
          datesAvailable = false
          break
        }
        idate = new Date(idate.getFullYear(), idate.getMonth(), idate.getDate() + 1)
      }
      return datesAvailable
    }
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
