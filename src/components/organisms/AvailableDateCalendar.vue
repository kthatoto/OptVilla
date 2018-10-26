<template lang="pug">
.availableDateCalendar
  .console
    div {{ current.year }}年 {{ current.month + 1 }}月
    div {{ next.year }}年 {{ next.month + 1 }}月
    span.monthChange.-prev(@click="prevMonth")
      icon.icon(name="chevron-left")
    span.monthChange.-next(@click="nextMonth")
      icon.icon(name="chevron-right")
  .calendars
    Calendar.calendar(:year="current.year" :month="current.month"
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
      current: {
        year: -1,
        month: -1
      },
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
    const currentMonth = new Date()
    this.current.year = currentMonth.getFullYear()
    this.current.month = currentMonth.getMonth()
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
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
          if (this.selectedDate.start === this.selectedDate.end) {
            this.selectedDate.start = new Date(0)
            this.selectedDate.end = new Date(0)
            this.selectedDate.selecting = false
          } else {
            this.selectedDate.start = date
            this.selectedDate.end = date
          }
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
    },
    prevMonth () {
      const currentMonth = new Date(this.current.year, this.current.month - 1)
      this.current.year = currentMonth.getFullYear()
      this.current.month = currentMonth.getMonth()
      const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      this.next.year = nextMonth.getFullYear()
      this.next.month = nextMonth.getMonth()
    },
    nextMonth () {
      const currentMonth = new Date(this.current.year, this.current.month + 1)
      this.current.year = currentMonth.getFullYear()
      this.current.month = currentMonth.getMonth()
      const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      this.next.year = nextMonth.getFullYear()
      this.next.month = nextMonth.getMonth()
    }
  }
}
</script>

<style lang="scss" scoped>
.availableDateCalendar {
  .calendars {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .calendar {
    width: 340px;
  }
  .console {
    width: 100%;
    position: relative;
    > div {
      width: 50%;
      text-align: center;
      font-weight: bold;
      float: left;
      margin-bottom: 10px;
      font-size: 20px;
    }
    .monthChange {
      position: absolute;
      cursor: pointer;
      width: 30px;
      height: 30px;
      .icon {
        vertical-align: -8px;
        height: 20px;
        width: 20px;
      }
      &.-prev {
        left: 0;
      }
      &.-next {
        right: 0;
      }
    }
  }
}
</style>
